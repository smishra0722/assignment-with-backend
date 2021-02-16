import mongoose from 'mongoose';

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    qualification: String,
    dateOfBirth: String,
    maritalStatus: String,
    selectedRadio: String
});

const postMessage = mongoose.model('PostMessage', schema);

export default postMessage;