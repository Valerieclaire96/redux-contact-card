import React, { useState, useEffect } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams, Link, useNavigate } from 'react-router-dom';
import LegoButton from '../components/legoButton.jsx';

function UpdateContact() {
    // Access global state, dispatch function, and necessary actions from the global reducer
    const { store, dispatch, updateContact, getContacts } = useGlobalReducer();

    // Get the contact ID from the URL parameters (React Router)
    const { id } = useParams();

    // State to hold the current contact information
    const [currentContactInfo, setCurrentContactInfo] = useState({ name: "", phone: "", email: "", address: "" });

    // State to hold the updated contact information
    const [newContactInfo, setNewContactInfo] = useState({ name: "", phone: "", email: "", address: "" });

    // Hook to navigate programmatically
    const navigate = useNavigate();

    // Fetch the list of contacts when the component mounts
    useEffect(() => {
        getContacts();  // Ensures we have the latest contacts from the API
    }, []);

    // Once contacts are fetched, find the contact that matches the given ID
    useEffect(() => {
        let currentContact = store.contacts.filter((contact) => contact.id == id);

        // Since IDs are unique, filter returns an array with at most one item
        if (currentContact.length === 1) {
            setCurrentContactInfo(currentContact[0]); // Set the original contact data
            setNewContactInfo(currentContact[0]); // Initialize the new contact data to be the same initially
        }
    }, [store.contacts]); // Runs whenever store.contacts is updated

    // Handle the update action when the button is clicked
    const handleUpdateContact = (e) => {
        e.preventDefault();
        updateContact(newContactInfo); // Calls the API to update the contact
        navigate("/"); // Redirects to the home page after updating
    };

    return (
        <div className='w-75 mx-auto mt-5 container rounded p-4'>
            {/* Name input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                    value={newContactInfo.name} // Prefills with existing contact data
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, name: e.target.value })} // Updates state as user types
                />
            </div>
            {/* Phone input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                    value={newContactInfo.phone}
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, phone: e.target.value })}
                />
            </div>
            {/* Email input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={newContactInfo.email}
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, email: e.target.value })}
                />
            </div>
            {/* Address input */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                    value={newContactInfo.address}
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, address: e.target.value })}
                />
            </div>
            {/* Update Contact button */}
            <button 
                className='btn ' 
                onClick={(e) => handleUpdateContact(e)}>
                <LegoButton display={"Update Contact"} color={"blue"}/>
            </button>
        </div>
    );
}

export default UpdateContact;
