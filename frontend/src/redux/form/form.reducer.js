
const helper = (state, payload) => {
    console.log('helper', state, payload);
    const index = state.findIndex(input => input._id === payload._id);
    state.splice(index, 1, payload);
    return state;
}

const deletee = (state, payload) => {
    const newVal = state.filter(input => input._id !== payload._id);
    console.log('delete',newVal);
    return state.filter((input) => input._id !== payload._id)
}

const formReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...state, action.payload]; 
        case 'UPDATE':
            return helper(state, action.payload)   
        case 'DELETE':
            return deletee(state, action.payload)
        default: 
            return state;
    }
}

export default formReducer;