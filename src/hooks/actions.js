export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96")
    let data = await response.json()

    if(data.detail == `Agenda "valerieclaire96" doesn't exist.`) {
        createAgenda()
    }
    dispatch({
        type: "set_agenda",
        payload: { agenda:data.slug, contacts:data.contacts },
    });
}
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96", {
        method: "POST",
        headers: { "Content-type": "application/json" }
    })
    let data = await response.json()
    // fetchAgenda()
}
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
    })
    getContacts(dispatch)
}
export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts")
    let data = await response.json();
    dispatch({
        type: "set_contacts",
        payload: { contacts:data.contacts },
    });
}
export const updateContact = async (dispatch, payload) => {
    let updatedName = payload.name;
    let updatedPhone = payload.phone;
    let updatedEmail = payload.email;
    let updatedAddress = payload.address;
    let id = payload.id

    let response = await fetch(`https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            name: updatedName,
            phone: updatedPhone,
            email: updatedEmail,
            address: updatedAddress
        })
    })
    getContacts(dispatch)
}
export const deleteContact = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts/${payload}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    getContacts(dispatch)
}

