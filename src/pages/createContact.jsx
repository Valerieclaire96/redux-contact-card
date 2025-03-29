import React, { useState } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from 'react-router-dom';
import LegoButton from '../components/legoButton.jsx';

function CreateContact() {
    // useState hook to manage contact input fields
    const [contact, setContact] = useState({ name: "", phone: "", email: "", address: "" });

    // Accessing global state and functions from useGlobalReducer
    const { store, dispatch, postContact } = useGlobalReducer();

    // useNavigate hook for programmatic navigation
    const navigate = useNavigate();

    // Function to handle form submission
    const handleCreateContact = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior (page reload)

        // Basic validation to prevent empty contact submissions
        if (!contact.name || !contact.phone || !contact.email || !contact.address) {
            alert("Please fill in all fields.");
            return;
        }

        // Call postContact function (async) and wait for it to complete
        await postContact(dispatch, contact);

        // Redirect the user back to the home page after adding a contact
        navigate("/");
    };

    return (
        <div className='w-75 mx-auto mt-5 container rounded p-4'>
            {/* Name input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Name</span>
                <input 
                    type="text" 
                    className="form-control"
                    value={contact.name} // Controlled component - value is linked to state
                    onChange={(e) => setContact({ ...contact, name: e.target.value })} // Updates state on input change
                />
            </div>

            {/* Phone input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Phone</span>
                <input 
                    type="text" 
                    className="form-control"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                />        
            </div>

            {/* Email input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Recipient's email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />
            </div>

            {/* Address input field */}
            <div className="input-group mb-3">
                <span className="input-group-text">Address</span>
                <input 
                    type="text" 
                    className="form-control"
                    value={contact.address}
                    onChange={(e) => setContact({ ...contact, address: e.target.value })}
                />
            </div>

            {/* Submit button: Calls handleCreateContact function when clicked */}
            <button 
                className='btn'
                onClick={(e) => handleCreateContact(e)}
            >
                <LegoButton display={"Add Contact"} color={"green"}/>
            </button>
        </div>
    );
}

export default CreateContact;
