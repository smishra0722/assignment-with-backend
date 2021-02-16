import React, {useState, useEffect} from 'react';
import './form.styles.scss';


//redux import
import {useDispatch, useSelector} from 'react-redux';
import { createInput, updateInput } from '../../redux/form/form.action';







const Form = ({currentId, setCurrentId}) => {
    const input = useSelector((state) => currentId ? state.form.find(input => input._id === currentId): null);
    const [state, setState] = useState({
        firstName: '', 
        lastName: '', 
        qualification: '',
        dateOfBirth: '', 
        maritalStatus: '', 
        selectedRadio: ''
    });
    const dispatch = useDispatch();
    useEffect(() => {
        if(input) setState(input);
    }, [input]);
        
    const handleSubmit = (e) => { 
        e.preventDefault();
        if(currentId) {
            dispatch(updateInput(currentId, state));
        } else {
            dispatch(createInput(state));
        }
        
        setState({
            firstName: '', 
            lastName: '', 
            qualification: '',
            dateOfBirth: '', 
            maritalStatus: '', 
            selectedRadio: ''
        });
        setCurrentId(null);
        console.log(state, createInput);
    }
        

    const {id, firstName, lastName, qualification, dateOfBirth, maritalStatus, selectedRadio} = state;    
    
    return (
        <div className='input-form'>
                <div className='form'>
                    <div className='group'>
                        <label className='form-input-label'>First Name:</label>
                        <input type='text' name='firstName' className='form-input' value={firstName} onChange={(e) => setState({...state, firstName: e.target.value})} required />
                    </div>
                    <div className='group'>
                        <label className='form-input-label'>Last Name:</label>
                        <input type='text' name='lastName' className='form-input' value={lastName} onChange={(e) => setState({...state, lastName: e.target.value})} required />
                    </div>
                    <div className='dropdown'>
                        <label className='form-input-label'>Qualifications:</label>
                        <select className='form-input' name='qualification' onChange={(e) => setState({...state, qualification: e.target.value})} value={qualification}>
                            <option value='' disabled>--Select--</option>
                            <option value='BscIt'>BscIt</option>
                            <option value='BCA'>BCA</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <label className='form-input-label'>Date of Birth:</label>
                        <input type='date' className='form-input' name='dateOfBirth' onChange={(e) => setState({...state, dateOfBirth: e.target.value})} value={dateOfBirth} />
                    </div>
                    <div className='dropdown'>
                        <label className='form-input-label'>Marital Status:</label>
                        <select className='form-input' name='maritalStatus' onChange={(e) => setState({...state, maritalStatus: e.target.value})} value={maritalStatus}>
                            <option value='' disabled>--Select--</option>
                            <option value='Married'>Married</option>
                            <option value='UnMarried'>UnMarried</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                    <label className='form-input-label'>Hobbies:</label><span className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Reading"
                                checked={selectedRadio === "Reading"}
                                onChange={(e) => setState({...state, selectedRadio: e.target.value})}
                                />
                                Reading
                            </label>
                        </span>
                        <span className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Games"
                                checked={selectedRadio === "Games"}
                                onChange={(e) => setState({...state, selectedRadio: e.target.value})}
                                />
                                Games
                            </label>
                        </span>
                        <span className="radio">
                            <label>
                                <input
                                type="radio"
                                value="Movies"
                                checked={selectedRadio === "Movies"}
                                onChange={(e) => setState({...state, selectedRadio: e.target.value})}
                                />
                                Movies
                            </label>
                        </span>
                    </div>
                    <button className='submit-button' onClick={(e) => handleSubmit(e, state)}>{currentId?'Update':'Submit'}</button>   
                </div>          
            </div>
    );   
        
    
}

export default Form;
