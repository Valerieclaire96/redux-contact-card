import React, { useState, useEffect } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function EditContactModal({ contact }) {
    const { store, dispatch, updateContact, getContacts } = useGlobalReducer()
    const [currentContactInfo, setCurrentContactInfo] = useState({ name: "", phone: "", email: "", address: "" })
    const [newContactInfo, setNewContactInfo] = useState({ name: "", phone: "", email: "", address: "" })

    useEffect(() => {
        getContacts()
    }, [])

    useEffect(() => {
        let currentContact = store.contacts.filter((eachContact, index) =>
            eachContact.id == contact.id
        )
        // filter creates an array in this scernio we know it will be an array of one since ids are unqiue so we can target the 0 index
        if (currentContact.length == 1) {
            setCurrentContactInfo(currentContact[0])
            setNewContactInfo(currentContact[0])
            // before updating current and new contact info are the same
        }
    }, [store.contacts])


    const handleUpdateContact = (e) => {
        e.preventDefault();
        updateContact(newContactInfo)
    }
    return (
        <div>
            <div className="modal-body text-start p-3 ms-3">
                <div className="mb-2 d-flex">
                    <p className='me-2'>Name: </p>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="inputGroup-sizing-default"
                        value={newContactInfo.name}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, name: e.target.value })}
                    />
                </div>
                {/* phone */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Phone: </p>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={newContactInfo.phone}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, phone: e.target.value })}
                    />
                </div>
                {/* email */}
                <div className="mb-2 d-flex">
                    <p className='me-2'>Email: </p>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={newContactInfo.email}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, email: e.target.value })}
                    />
                </div>
                {/* address */}
                <div className="d-flex">
                    <p className='me-2'>Address: </p>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="inputGroup-sizing-default"
                        value={newContactInfo.address}
                        onChange={(e) => setNewContactInfo({ ...newContactInfo, address: e.target.value })}
                    />
                </div>
            </div>
            <div className="modal-footer">
                <button className='btn btn-info' data-bs-dismiss="modal" onClick={(e) => handleUpdateContact(e)}>Update</button>
            </div>

        </div>
    )
}
