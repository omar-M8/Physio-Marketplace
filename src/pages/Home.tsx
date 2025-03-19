import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

// Define the properties that the component will accept

const Home: React.FC = () => {

    const navigate = useNavigate();

    const toLandingPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Navigate to Landing page")
        navigate('/')
    }

    return (
        <main>
            <h1>Physio Marketplace</h1>
            <h2>Welcome</h2>
            <br/>
            <button onClick={toLandingPage}>Logout</button>
        </main>
    )
}

export default Home;