// Fetches the agenda from the API
export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96");
    let data = await response.json();

    // If the agenda doesn't exist, create it first
    if (data.detail == `Agenda "valerieclaire96" doesn't exist.`) {
        createAgenda(); // Call function to create agenda
    }

    // Dispatch the agenda data to the global state
    dispatch({
        type: "set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });
}

// Creates a new agenda
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96", {
        method: "POST",
        headers: { "Content-type": "application/json" }
    });
    let data = await response.json();
    
    //fetch again once created
    fetchAgenda(dispatch);
}

// Posts (adds) a new contact to the agenda
export const postContact = async (dispatch, payload) => {
    let inputName = payload.name;
    let inputPhone = payload.phone;
    let inputEmail = payload.email;
    let inputAddress = payload.address;
    
    let response = await fetch('https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: inputName,
            phone: inputPhone,
            email: inputEmail,
            address: inputAddress
        })
    });

    // Refresh the contact list after adding a new contact
    getContacts(dispatch);
}

// Fetches all contacts in the agenda
export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts");
    let data = await response.json();
    
    // Dispatch the contacts to update the global state
    dispatch({
        type: "set_contacts",
        payload: { contacts: data.contacts },
    });
}

// Updates an existing contact's information
export const updateContact = async (dispatch, payload) => {
    let updatedName = payload.name;
    let updatedPhone = payload.phone;
    let updatedEmail = payload.email;
    let updatedAddress = payload.address;
    let id = payload.id;

    let response = await fetch(`https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: updatedName,
            phone: updatedPhone,
            email: updatedEmail,
            address: updatedAddress
        })
    });

    // Refresh the contact list after updating a contact
    getContacts(dispatch);
}

// Deletes a contact from the agenda
export const deleteContact = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts/${payload}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    });

    // Refresh the contact list after deleting a contact
    getContacts(dispatch);
}
