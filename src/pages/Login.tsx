import React from 'react'; 
import TextInput from '../components/TextInputProps';
import PasswordInput from '../components/passwordInputProp';

const Login: React.FC = () => {
    return (
        <main>
            <h1>Physio MarketPlace</h1>
            <h2>Login</h2>
            <form>
                <TextInput label='Username:' name='usrName' type='usrName' required={true} />
                <br />
                <PasswordInput label='Password:' name='password' required={true} />
                <br />
                <button type='submit'>Login</button>
            </form>
        </main>
    )
}