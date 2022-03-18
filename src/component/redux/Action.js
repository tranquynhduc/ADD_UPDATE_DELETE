import {ADD_CONTACT, UPDATE_CONTACT,DELETE_CONTACT} from './Reducer';

export const add_contact =( addContacts) =>{
    return{
        type:ADD_CONTACT,
        payload: addContacts
    }

}
export const update_contact =( updateContacts) =>{
    return{
        type:UPDATE_CONTACT,
        payload: updateContacts
    }

}
export const delete_contact =( deleteContacts) =>{
    return{
        type:DELETE_CONTACT,
        payload: deleteContacts
    }

}