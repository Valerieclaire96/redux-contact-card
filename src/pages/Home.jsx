import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/contactCard.jsx";

export const Home = () => {
    // Access global state, dispatch function, and fetchAgenda function from the custom reducer
    const { store, dispatch, fetchAgenda } = useGlobalReducer();

    // Local state to store contacts fetched from the API
    const [contacts, setContacts] = useState([]);

    // Fetch the agenda (contact list) when the component mounts
    useEffect(() => {
        fetchAgenda();  // Calls the API to get the contacts
    }, []); // Runs only once when the component loads

    // Whenever the global state (store.contacts) updates, update the local state
    useEffect(() => {
        setContacts(store.contacts);
    }, [store.contacts]); // Runs every time store.contacts changes

    return (
        <div className="text-center mt-5 w-100">
            <div className="d-flex flex-wrap justify-content-center">
                {/* If contacts exist, display them using ContactCard */}
                {contacts.length > 0 ? contacts.map((contact, index) => {
					//there are only 9 lego pictures so restart after using all nine
					let pictureNumber = index < 10 ? index : index - 9;
					return (
						<ContactCard 
                        key={contact.id}  // Each contact must have a unique key for React
                        contact={contact} // Passes contact data to the ContactCard component
                        pictureNumber={pictureNumber} // Uses the index for a unique profile picture
                    />
					)
				})
                :
                /* If no contacts exist, display a message */
                <h2>Create Some Characters!</h2>
                }
            </div>
        </div>
    );
};
