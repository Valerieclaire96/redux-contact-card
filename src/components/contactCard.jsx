import React, { useState } from 'react' // Importing React and useState for managing component state if needed.
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"; // Importing a custom hook for global state management.
import { Link } from 'react-router-dom' // Importing Link from react-router-dom for navigation.
import MoreInfoModal from './moreInfoModal.jsx'; // Importing a modal component to show more details about a contact.

export default function ContactCard({ contact, pictureNumber }) {
  // Extracting values from the global reducer (store, dispatch, and deleteContact function).
  const { store, dispatch, deleteContact } = useGlobalReducer()

  return (
    <div>
      <div className="card mx-2" style={{ "width": "18rem" }}>
        {/* Displaying a random user avatar from an external API */}
        <img src={`https://randomuser.me/api/portraits/lego/${pictureNumber}.jpg`} className="card-img-top" alt="Profile" />

        <div className="card-body">
          {/* Displaying the contact's name */}
          <h5 className="card-title">{contact.name}</h5>

          {/* Displaying the contact's phone number */}
          <p className="card-text">{contact.phone}</p>

          <div className="btn-group btn-group-sm">
            {/* Button to trigger the More Info modal */}
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#moreInfoModal${contact.id}`}>
              ➕
            </button>

            {/* Bootstrap modal structure, dynamically assigned an ID based on contact ID */}
            <div className="modal fade" id={`moreInfoModal${contact.id}`} tabIndex="-1" aria-labelledby="moreInfoModalLabel" aria-hidden="true">
              {/* Rendering the MoreInfoModal component and passing the contact and pictureNumber as props */}
              <MoreInfoModal contact={contact} pictureNumber={pictureNumber} />
            </div>

            {/* Edit button - Navigates to the update page for the contact */}
            <Link to={`update/${contact.id}`} className="link-light btn btn-warning">✏️</Link>

            {/* Delete button - Calls deleteContact function from global reducer */}
            <span className="btn btn-warning" onClick={() => deleteContact(contact.id)}>🗑️</span>
          </div>
        </div>
      </div>
    </div>
  )
}
