import React, { useState } from 'react'
import EditContactModal from './editContactModal.jsx';

export default function MoreInfoModal({ contact, pictureNumber }) {
    const [update, setUpdate] = useState(false)
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="modal-title fs-5 d-flex align-items-center" id={`moreInfoModalabel${contact.id}`}>
                        <img
                            src={`https://randomuser.me/api/portraits/lego/${pictureNumber}.jpg`}
                            className="card-img-top"
                            alt="logo guy"
                            height="50px"
                        />
                        <h6 className='mx-2 text-nowrap'>{contact.name}</h6>
                        <span type="button" className="fs-6 mb-2" onClick={() => setUpdate(!update)}>✏️</span>

                    </span>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                {update == false ?
                    <div className="modal-body text-start p-3 ms-3">
                        <div className="mb-2 d-flex">
                            <p className='me-2'>Name: </p>
                            <p>{contact.name}</p>
                        </div>
                        {/* phone */}
                        <div className="mb-2 d-flex">
                            <p className='me-2'>Phone: </p>
                            <p>{contact.phone}</p>
                        </div>
                        {/* email */}
                        <div className="mb-2 d-flex">
                            <p className='me-2'>Email: </p>
                            <p>{contact.email}</p>
                        </div>
                        {/* address */}
                        <div className="d-flex">
                            <p className='me-2'>Address: </p>
                            <p>{contact.address}</p>
                        </div>
                    </div>
                    :
                    <EditContactModal contact={contact} />
                }

            </div>
        </div>
    )
}
