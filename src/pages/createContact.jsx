import React, {useState} from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from 'react-router-dom';
import LegoButton from '../components/legoButton.jsx';

function CreateContact() {
    const [contact, setContact] = useState({name:"", phone:"", email:"", address:""});
    const {store, dispatch, postContact} =useGlobalReducer()
    const navigate = useNavigate()

    const handleCreateContact = (e) => {
        e.preventDefault();
        postContact(contact)
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
                onChange={(e)=>setContact({...contact, name:e.target.value})}
            />
        </div>
        {/* phone */}
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Phone</span>
            <input 
                type="text" 
                className="form-control" 
                aria-describedby="inputGroup-sizing-default"
                onChange={(e)=>setContact({...contact, phone:e.target.value})}
            />        
        </div>
        {/* email */}
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Email: </span>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Recipient's username" 
                aria-label="Recipient's username" 
                aria-describedby="basic-addon2"
                onChange={(e)=>setContact({...contact, email:e.target.value})}
            />
        </div>
        {/* address */}
        <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Address</span>
            <input 
                type="text" 
                className="form-control" 
                aria-describedby="inputGroup-sizing-default"
                onChange={(e)=>setContact({...contact, address:e.target.value})}
            />
        </div>
        <button 
            className='btn'
            onClick={(e)=>handleCreateContact(e)}
        ><LegoButton display={"Add Contact"} color={"green"}/></button>
    </div>
  )
}

export default CreateContact