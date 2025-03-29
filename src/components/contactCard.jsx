import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from 'react-router-dom'
import MoreInfoModal from './moreInfoModal.jsx';

export default function ContactCard({ contact, pictureNumber }) {
  const { store, dispatch, deleteContact } = useGlobalReducer()

  return (
    <div>
      <div className="card mx-2" style={{ "width": "18rem" }}>
        <img src={`https://randomuser.me/api/portraits/lego/${pictureNumber}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>

          <p className="card-text">{contact.phone}</p>
          <div className="btn-group btn-group-sm">
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#moreInfoModal${contact.id}`}>
              ➕
            </button>
            {/* <!-- Modal --> */}
            <div className="modal fade" id={`moreInfoModal${contact.id}`} tabIndex="-1" aria-labelledby="moreInfoModalabel" aria-hidden="true">
              <MoreInfoModal contact={contact} pictureNumber={pictureNumber}/>
            </div>

            <Link to={`update/${contact.id}`} className="link-light btn btn-warning">✏️</Link>
            <span className="btn btn-warning" onClick={(e) => deleteContact(contact.id)}>🗑️</span>
          </div>
        </div>
      </div>

    </div>
  )
}
