import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './user-info-form.styles.scss';

const defaultFormFields = {
    height: '',
    weight: '',
    age: ''
};

const UserInfoForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { age, height, weight } = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();
        //////////////////////////////
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        //////////////////////////////
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className='user-info-container'>
            <h2>Your personal parameters:</h2>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Age'
                    type='number'
                    required
                    onChange={handleChange}
                    name='age'
                    value={age}
                />
                <FormInput
                    label='Height (kg)'
                    type='number'
                    required
                    onChange={handleChange}
                    name='height'
                    value={height}
                />
                <FormInput
                    label='Weight (cm)'
                    type='number'
                    required
                    onChange={handleChange}
                    name='weight'
                    value={weight}
                />
                <h3>Allergens:</h3>
                <label htmlFor='a1'>
                    A1<input type='checkbox' id='a1'/>
                </label>
                
                <FormInput
                    label='Weight'
                    type='checkbox'
                    required
                    onChange={handleChange}
                    name='weight'
                    value={weight}
                />
            </form>
        </div>
    )
}

export default UserInfoForm;