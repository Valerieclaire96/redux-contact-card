import React, {useState, useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  //agendas = your user

	return (
		<div className="text-center mt-5">
			{/* {store.contacts?.maps(contact,index)(
				<p>{contact.name}</p>
			)} */}
			
		</div>
	);
}; 