export const fetchAgenda = async (dispatch) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/valerieclaire96")
    let data = await response.json()

    if(data.detail == "User valerieclaire96 doesn't exist.") {
        createAgenda()
    }
    dispatch({
        type: "set_agenda",
        payload: { agenda:data.slug, contacts:data.contacts },
    });
}
export const createAgenda = async (dispatch) => {
    let response = await fetch("'https://playground.4geeks.com/contact/agendas/valerieclaire96'", {
        method: "POST",
        headers: { "Content-type": "application/json" }
    })
    let data = response.json()
    // fetchAgenda()
}
export const createContact = async (dispatch) => {
    let inputName = dispatch.name;
    let inputPhone = dispatch.phone;
    let inputEmail = dispatch.email;
    let inputAddress = dispatch.address;
    
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
    getContacts()
}
export const getContacts = async (dispatch) => {
    let response = await fetch("'https://playground.4geeks.com/contact/agendas/valerieclaire96/contacts'")
    let data = await response.json();
    dispatch({
        type: "set_contacts",
        payload: { contacts:data.contacts },
    });
}
export const updateContact = async (dispatch) => {
    let updatedName = dispatch.name;
    let updatedPhone = dispatch.phone;
    let updatedEmail = dispatch.email;
    let updatedAddress = dispatch.address;
    let id = dispatch.id

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
    getContacts()
}
export const deleteContact = async (dispatch) => {
    let response = await fetch(` https://playground.4geeks.com/contact/agendas/valerieclaire96%40gmail.com/contacts/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    getContacts()
}

