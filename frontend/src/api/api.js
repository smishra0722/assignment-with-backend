import axios from 'axios'; // use it to make api call

const url = 'http://localhost:5000/inputs'
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
export const fetchInputs = () => axios.get(url);

export const createInput = (newInput) => axios.post(url, newInput);

export const updateInput = (id, updatedInput) => axios.patch(`${url}/${id}`, updatedInput);

export const deleteInput = (id) => axios.delete(`${url}/${id}`);
