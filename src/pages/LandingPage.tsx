import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';


const LandingPage: React.FC = () => {

    const navigate = useNavigate();

    const toSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Sign-up button clicked", e)
        navigate('/signup')
    }

    const toLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Login button clicked!", e)
        navigate('/login')
    }

    return (
        <div>
            <h1>Welcome</h1>

            <button onClick={toSignUp}>Sign Up</button>
            <br/>
            <br/>
            <br/>
            <button onClick={toLogin}>Login</button>
        </div>
    )
}

export default LandingPage