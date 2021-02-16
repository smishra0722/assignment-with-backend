import React, { Component } from 'react';
import './form-input-display.styles.scss';
import  Form  from '../form/form.component';

import {useSelector, useDispatch} from 'react-redux';
import {deleteInput} from '../../redux/form/form.action';
const FormInput = ({currentId, setCurrentId}) => {
    
    const value = useSelector((state) => state.form);
    const dispatch = useDispatch();
    console.log(value);
    return (
            <div className='container'>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                <div className='display-input'>
                                    <div className='display-input-header'>
                                        <span className='headings'>First Name</span>
                                        <span className='headings'>Last Name</span>
                                        <span className='headings'>Qualification</span>
                                        <span className='headings'>Date of Birth</span>
                                        <span className='headings'>Marital Status</span>
                                        <span className='headings'>Hobby</span>
                                        <span className='headings'>Actions</span>
                                    </div>
                                    {
                                        !value.length? 'Data loading...':
                                        value.map(input => (
                                            <div className='display-input-items' key={input._id}>
                                            <span className='items'>{input.firstName}</span>
                                            <span className='items'>{input.lastName}</span>
                                            <span className='items'>{input.qualification}</span>
                                            <span className='items'>{input.dateOfBirth}</span>
                                            <span className='items'>{input.maritalStatus}</span>
                                            <span className='items'>{input.selectedRadio}</span>
                                            <span className='items-btn'><button className='btn' onClick={() => setCurrentId(input._id)}>Edit</button>
                                            <button className='btn' onClick={() => dispatch(deleteInput(input._id))}>Delete</button></span>
                                            </div>
                                        ))
                                    }
                </div>
            </div>
        )
    
}

export default FormInput;
