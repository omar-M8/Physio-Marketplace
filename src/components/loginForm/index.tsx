import React from "react"
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";
import TextInput from "../inputComponents/TextInputProps";
import PasswordInput from "../inputComponents/passwordInputProp";

const LoginForm : React.FC = () => {

    const navigate = useNavigate();

    //Define state for form data
    const [FormData, setFormData] = React.useState({
        email: '',
        password: ''
    })

    // Update form data when input values change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name]: value
        })
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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

    return(
        <form onSubmit={handleLogin}>
                        <TextInput label='email:' name='email' type='email' required={true} value={FormData.email} onChange={handleChange}/>
                        <br />
                        <PasswordInput label='Password:' name='password' type='password' required={true} onChange={handleChange}/>
                        <br />
                        <button type='submit'>Login</button>
        </form>
    )
}


export default LoginForm