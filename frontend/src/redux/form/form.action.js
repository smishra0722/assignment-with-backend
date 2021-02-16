import * as api from '../../api/api';

export const getInputs = async (dispatch) => {
    try {
        const {data} = await api.fetchInputs();
        console.log('get', data);
        dispatch({
            type: 'FETCH_ALL',
            payload: data
        });
    } catch(error) {
        console.log(error.message);
    }
}; 

export const createInput = (input) => async(dispatch) => {
    try {
        const {data} = await api.createInput(input);
        console.log('create', data);
        dispatch({type: 'CREATE', payload: data});
    } catch(error) {
        console.log(error);
    }
}

export const updateInput = (id, input) => async(dispatch) => {
    try {
       const {data} = await api.updateInput(id, input);
        console.log('Update', data);
       dispatch({type: 'UPDATE', payload: data});
    } catch(error) {
        console.log(error.message);
    }
}

export const deleteInput = (id) => async (dispatch) => {
    try {
        await api.deleteInput(id);

        dispatch({type: 'DELETE', payload: id});
    } catch(error) {    
        console.log(error);
    }
}