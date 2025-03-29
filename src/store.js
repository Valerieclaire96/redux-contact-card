export const initialStore=()=>{
  return{
    message: null,
    agenda: null,
    contacts : []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_agenda' :
      //keep previous values from store
      return {
        ...store, 
        agenda: action.payload.agenda, 
        contacts: action.payload.contacts
      };
    case 'set_contacts' : 
      return {...store, contacts: action.payload.contacts}
    default:
      throw Error('Unknown action.');
  }    
}
