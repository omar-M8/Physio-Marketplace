import React from 'react';
import TextInput from '../components/inputComponents/TextInputProps';
import PasswordInput from '../components/inputComponents/passwordInputProp';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import SignupForm from '../components/signUpForm';

// Define component that returns JSX
const SignUp: React.FC = () => {

    const navigate = useNavigate();

    const toLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
            console.log("Login button clicked!", e)
            navigate('/login')
        }

    return (
        <div>
            <h1>Physio MarketPlace</h1>
            <h2>About</h2>
            <p>Welcome to Physio Marketplace, your one-stop destination for
            connecting with top-rated physiotherapists. Our platform is dedicated
            to helping you find the best professionals to meet your physical
            therapy needs, ensuring you receive the highest quality care and
            support on your journey to recovery and wellness.</p>
            <h2>Sign Up</h2>
            <SignupForm/>
        </div>
    )
}

export default SignUp;