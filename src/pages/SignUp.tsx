import React from 'react';
import TextInput from '../components/TextInputProps';
import PasswordInput from '../components/passwordInputProp';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';

// Define component that returns JSX
const SignUp: React.FC = () => {

    const navigate = useNavigate();

    // Define state for form data
    const [formData, setFormData] = React.useState({
        fname: '',
        lname: '',
        email: '',
        phoneNmbr: '',
        usrName: '',
        password: ''
    })

    // Update form data when input values change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Event:', e.target);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Log form data when form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!/^\d{3}\d{3}\d{4}$/.test(formData.phoneNmbr)) {
            alert('Please enter a valid phone number in the format: XXX-XXX-XXXX');
            return;
        }
        
        try {
            // Call Supabase Auth API to sign up the user
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        first_name: formData.fname,
                        last_name: formData.lname,
                        phone_number: formData.phoneNmbr,
                        username: formData.usrName,
                    }
                }
            });

            if (error) {
                alert(error.message);
            } else {
                alert('Signup successful! Please check your email for verification.');
                navigate('/Home'); // Redirect to home after successful signup
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    }


    return (
        <main>
            <h1>Physio MarketPlace</h1>
            <h2>About</h2>
            <p>Welcome to Physio Marketplace, your one-stop destination for
            connecting with top-rated physiotherapists. Our platform is dedicated
            to helping you find the best professionals to meet your physical
            therapy needs, ensuring you receive the highest quality care and
            support on your journey to recovery and wellness.</p>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <TextInput label="First Name:" name="fname" type="text" required={true} value= {formData.fname} onChange={handleChange}/>
                <br />
                <TextInput label='Last Name:' name='lname' type='text' required={true} value={formData.lname} onChange={handleChange} />
                <br />
                <TextInput label='Email:' name='email' type='email' required={true} value={formData.email} onChange={handleChange} />
                <br />
                <TextInput label='Phone Number:' name='phoneNmbr' type='tel' required={true} value= {formData.phoneNmbr} onChange={handleChange} />
                <br />
                <TextInput label='Username:' name='usrName' type='usrName' required={true} value={formData.usrName} onChange={handleChange} />
                <br />
                <PasswordInput label='Password:' type='password' name='password' required={true} value={formData.password} onChange={handleChange}/> 
                <br />
                <br />
                <label>
                    Area of Specialty:
                    <div>
                        <label>
                            <input type='checkbox' name='specialty' value='orthopedic' />
                            Orthopedic
                        </label>
                        <label>
                            <input type='checkbox' name='specialty' value='neurological' />
                            Neurological
                        </label>
                        <label>
                            <input type='checkbox' name='specialty' value='cardiovascular' />
                            Cardiovascular
                        </label>
                        <label>
                            <input type='checkbox' name='specialty' value='respiratory' />
                            Respiratory
                        </label>
                        <label>
                            <input type='checkbox' name='specialty' value='pediatric' />
                            Pediatric
                        </label>
                        <label>
                            <input type='checkbox' name='specialty' value='geriatric' />
                            Geriatric
                        </label>
                        <label>
                            <input type='checkbox' name='specialty' value='sports' />
                            Sports
                        </label>
                    </div>
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </main>
    )
}

export default SignUp;