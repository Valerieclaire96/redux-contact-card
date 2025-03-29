import React, { useState, useEffect } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams, Link, useNavigate } from 'react-router-dom';
import LegoButton from '../components/legoButton.jsx';

function UpdateContact() {
    const { store, dispatch, updateContact, getContacts } = useGlobalReducer()
    const { id } = useParams()
    const [currentContactInfo, setCurrentContactInfo] = useState({name:"",phone:"",email:"",address:""})
    const [newContactInfo, setNewContactInfo] = useState({name:"",phone:"",email:"",address:""})
    const navigate = useNavigate()

    useEffect(()=> {
        getContacts()       
    }, [])
    useEffect(() => {
        let currentContact = store.contacts.filter((contact, index) => 
            contact.id == id
        )
        // filter creates an array in this scernio we know it will be an array of one since ids are unqiue so we can target the 0 index
        if(currentContact.length == 1){
            setCurrentContactInfo(currentContact[0])
            setNewContactInfo(currentContact[0])
            // before updating current and new contact info are the same
        }
        
    }, [store.contacts])


    const handleUpdateContact = (e) => {
        e.preventDefault();
        updateContact(newContactInfo)
        navigate("/")
    }

    return (
        <div className='w-75 mx-auto mt-5 container rounded p-4'>
            {/* name */}
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="inputGroup-sizing-default"
                    value={newContactInfo.name}
                    onChange={(e) => setNewContactInfo({ ...newContactInfo, name: e.target.value })}
                />
            </div>
            {/* phone */}
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
            {/* email */}
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
            {/* address */}
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
            <button 
                className='btn ' 
                onClick={(e)=>handleUpdateContact(e)}>
                <LegoButton display={"Update Contact"} color={"blue"}/>
            </button>
        </div>
    )
}

export default UpdateContact