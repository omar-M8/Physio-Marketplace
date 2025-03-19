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
        password: '',
        specialties: [] as string[]
    })

    // Update form data when input values change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    console.log('Form Data:', formData);

    const handleChekedBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target; //extract 'value' and 'checked' (true/false) from target element

        setFormData((prevData) => {
            const selectedValues = prevData.specialties || [];
            
            return {
                ...prevData,
                specialties: checked ? [...selectedValues, value] //add value to array if checked
                : selectedValues.filter((v) => v !== value) //remove value from array if unchecked
            };
            })
        }

    const toLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
            console.log("Login button clicked!", e)
            navigate('/login')
        }


    // Log form data when form is submitted
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!/^\d{3}\d{3}\d{4}$/.test(formData.phoneNmbr)) {
            alert('Please enter a valid phone number in the format: XXX-XXX-XXXX');
            return;
        }
        //Implement sign up logic once the submit button is clicked:
            //1. Call the signUp method from the auth object in the supabase client
            //2. If the sign up is successful, insert the user data into the users table in the database
            //3. If the sign up is successful, redirect the user to the home page
        try {            
            const {data: authData, error: authError} = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password
            });

            if (authError) {
                throw (authError.message);
            }

            const {data, error: dbError} = await supabase.from('users').insert([
                {
                    id: authData?.user?.id,
                    fname: formData.fname,
                    lname: formData.lname,
                    email: formData.email,
                    phone_number: formData.phoneNmbr,
                    username: formData.usrName,
                    specialties: formData.specialties
                }
            ]);

                if (dbError) {
                    throw (dbError.message);
                }

                alert('Signup successful! Please check your email for verification.');
                navigate('/Home'); // Redirect to home page after successful signup 
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
                <PasswordInput label='Password:' type='password' name='password' required={true} onChange={handleChange}/> 
                <br />
                <br />

                <label>
                    Area of Specialization:
                    <div>
                        {
                        ["Orthopedic", 
                        "Neurological", 
                        "Cardiopulmonary", 
                        "Geriatric", 
                        "Pediatric", 
                        "Sports",
                        "Medicine"
                        ].map((specialty) => (
                            <label key={specialty}>
                                <input 
                                    type="checkbox" 
                                    name='specialty'
                                    value={specialty} 
                                    onChange={handleChekedBoxChange}
                                    checked={formData.specialties.includes(specialty)}
                                    />
                                    {specialty.charAt(0).toUpperCase() + specialty.slice(1)}
                            </label>
                        ))}
                    </div>
                </label>

                <br />
                <button type="submit">Sign Up</button>
                <br/><br/>
                <button onClick={toLogin}>Already have an account?</button>
            </form>
        </main>
    )
}

export default SignUp;