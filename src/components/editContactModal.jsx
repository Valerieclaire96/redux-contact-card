import React, { useState, useEffect } from 'react' // Import React along with useState and useEffect hooks.
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"; // Import the custom hook for global state management.

export default function EditContactModal({ contact }) {
    // Extract global state management functions from the reducer.
    const { store, dispatch, updateContact, getContacts } = useGlobalReducer();

    // Local state to store the current contact's info (retrieved from the global store).
    const [currentContactInfo, setCurrentContactInfo] = useState({ name: "", phone: "", email: "", address: "" });

    // Local state to store the new contact info (to be edited by the user).
    const [newContactInfo, setNewContactInfo] = useState({ name: "", phone: "", email: "", address: "" });

    // Fetch contacts when the component mounts.
    useEffect(() => {
        getContacts(); // Calls function from global reducer to get the list of contacts.
    }, []);

    // Update currentContactInfo and newContactInfo when store.contacts changes.
    useEffect(() => {
        let currentContact = store.contacts.filter((eachContact) =>
            eachContact.id == contact.id // Find the contact in the global store with a matching ID.
        );

        // Since IDs are unique, we expect exactly one match.
        if (currentContact.length == 1) {
            setCurrentContactInfo(currentContact[0]); // Store the original contact details.
            setNewContactInfo(currentContact[0]); // Initialize the new contact details (to be edited).
        }
    }, [store.contacts]); // Re-run this effect when contacts in the global store change.

    // Function to handle updating the contact.
    const handleUpdateContact = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        updateContact(newContactInfo); // Call the update function with modified contact details.
    };

    return (
        <div>
            <div className="modal-body text-start p-3 ms-3">
                {/* Name Input */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Name: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.name}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, name: e.target.value })}
                    />
                </div>

                {/* Phone Input */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Phone: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.phone}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, phone: e.target.value })}
                    />
                </div>

                {/* Email Input */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Email: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.email}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, email: e.target.value })}
                    />
                </div>

                {/* Address Input */}
                <div className="d-flex">
                    <p className='me-2'>Address: </p>
                    <input
                        type="text"
                        className="form-control"
                        value={newContactInfo.address}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, address: e.target.value })}
                    />
                </div>
            </div>

            {/* Modal Footer: Contains the update button */}
            <div className="modal-footer">
                {/* Update button triggers handleUpdateContact and dismisses the modal */}
                <button className='btn btn-info' data-bs-dismiss="modal" onClick={(e) => handleUpdateContact(e)}>Update</button>
            </div>
        </div>
    );
}
