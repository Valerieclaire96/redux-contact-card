import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/contactCard.jsx";

export const Home = () => {
	const { store, dispatch, fetchAgenda } = useGlobalReducer()
	const [contacts, setContacts] = useState([])
	//agendas = your user
	useEffect(() => {
		fetchAgenda()
	}, [])

	useEffect(() => {
		setContacts(store.contacts)
	}, [store.contacts])

	return (
		<div className="text-center mt-5 w-100">
			<div className="d-flex flex-wrap justify-content-center">
				{contacts.length > 0 ? contacts.map((contact, index) => (
					<ContactCard key={contact.id} contact={contact} pictureNumber={index}/>
				))
			:
				<h2>Create Some Characters!</h2>
			}
			</div>
		</div>
	);
}; 