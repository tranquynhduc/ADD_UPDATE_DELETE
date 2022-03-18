export const ADD_CONTACT = ' ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT'; 
export const DELETE_CONTACT = 'DELETE_CONTACT';
const initailState = [
    {
        id: '1',
        name: 'cocacola',
        email: 'test1@gmail.com',
        phone: '0123654789'

    },
    {
        id: '2',
        name: 'Pepsi',
        email: 'test2@gmail.com',
        phone: '0147852369'

    }
]
export const contactReducer = (state = initailState, action) => {
    // console.log(state);
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload]
        case UPDATE_CONTACT:
            return state.map((contact) => contact.id == action.payload.id ? action.payload : contact);
        case DELETE_CONTACT:
            return state.filter((contact) => contact.id !== action.payload && contact)
        default:
            return state;
    }
}