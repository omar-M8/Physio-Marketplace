import React from 'react';
import TextInput from '../components/TextInputProps';
import PasswordInput from '../components/passwordInputProp';

// Define component that returns JSX
const SignUp: React.FC = () => {
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
            <form>
                <TextInput label="First Name:" name="name" type="text" required={true} />
                <br />
                <TextInput label='Last Name:' name='name' type='text' required={true} />
                <br />
                <TextInput label='Email:' name='email' type='email' required={true} />
                <br />
                <TextInput label='Phone Number:' name='phone' type='tel' required={true} />
                <br />
                <TextInput label='Username:' name='usrName' type='usrName' required={true} />
                <br />
                <PasswordInput label='Password:' name='password' required={true} /> 
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
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </main>
    )
}

export default SignUp;