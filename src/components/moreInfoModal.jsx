import React, { useState } from 'react' // Import React and useState for managing local state
import EditContactModal from './editContactModal.jsx'; // Import the EditContactModal component

export default function MoreInfoModal({ contact, pictureNumber }) {
    // Local state to toggle between viewing and editing mode
    const [update, setUpdate] = useState(false);

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
                        {/* Contact's name */}
                        <h6 className='mx-2 text-nowrap'>{contact.name}</h6>

                        {/* Edit button: Toggles the update state between viewing and editing */}
                        <span type="button" className="fs-6 mb-2" onClick={() => setUpdate(!update)}>✏️</span>
                    </span>

                    {/* Close button for the modal */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                {/* Conditional rendering: Show contact details or edit form */}
                {update == false ? (
                    // Display mode: Show contact details
                    <div className="modal-body text-start p-3 ms-3">
                        <div className="mb-2 d-flex">
                            <p className='me-2'>Name: </p>
                            <p>{contact.name}</p>
                        </div>

                        {/* Phone field */}
                        <div className="mb-2 d-flex">
                            <p className='me-2'>Phone: </p>
                            <p>{contact.phone}</p>
                        </div>

                        {/* Email field */}
                        <div className="mb-2 d-flex">
                            <p className='me-2'>Email: </p>
                            <p>{contact.email}</p>
                        </div>

                        {/* Address field */}
                        <div className="d-flex">
                            <p className='me-2'>Address: </p>
                            <p>{contact.address}</p>
                        </div>
                    </div>
                ) : (
                    // Edit mode: Show EditContactModal component
                    <EditContactModal contact={contact} />
                )}
            </div>
        </div>
    );
}
