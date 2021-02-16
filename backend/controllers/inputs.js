import mongoose from 'mongoose';
import postMessage from '../models/postMessage.js';

export const getInputs = async (req, res) => {
    try {
        const postMessages = await postMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createInput = async (req, res) => {
    const { firstName, lastName, qualification,  dateOfBirth, maritalStatus, selectedRadio } = req.body;

    const newPostMessage = new postMessage({  firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateInput = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await postMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});
    res.json(updatedPost);
}

export const deleteInput = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await postMessage.findByIdAndRemove(id);
    res.json({message: 'Post deleted successfully'});
}