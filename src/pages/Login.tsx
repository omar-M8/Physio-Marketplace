import React from 'react'; 
import TextInput from '../components/inputComponents/TextInputProps';
import PasswordInput from '../components/inputComponents/passwordInputProp';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import LoginForm from '../components/loginForm';

const Login: React.FC = () => {
    const navigate = useNavigate();


    return (
        <main>
            <h1>Physio MarketPlace</h1>
            <h2>Login</h2>
            <LoginForm></LoginForm>
        </main>
    )
}

export default Login 