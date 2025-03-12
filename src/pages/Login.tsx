import React from 'react'; 
import TextInput from '../components/TextInputProps';
import PasswordInput from '../components/passwordInputProp';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';

const Login: React.FC = () => {
    const navigate = useNavigate();

    //Define state for form data
    const [FormData, setFormData] = React.useState({
        email: '',
        password: ''
    })

    // Update form data when input values change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Event:', e.target);
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name]: value
        })
    }

    // Log form data when form is submitted
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data Submitted:', FormData);
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data Submitted:', FormData);

        try {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: FormData.email,
                password: FormData.password,
            });

            if (error) {
                alert(error.message);
                return;
            }

            alert('Login successful!');
            navigate('/Home');

        } catch (error) {
            console.error("Login error:", error);
            alert("An unexpected error occurred. Please try again.");
        }


    }


    return (
        <main>
            <h1>Physio MarketPlace</h1>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <TextInput label='email:' name='email' type='email' required={true} value={FormData.email} onChange={handleChange}/>
                <br />
                <PasswordInput label='Password:' name='password' type='password' required={true} value={FormData.password} onChange={handleChange}/>
                <br />
                <button type='submit'>Login</button>
            </form>
        </main>
    )
}

export default Login 