import React from 'react'; 
import TextInput from '../components/TextInputProps';
import PasswordInput from '../components/passwordInputProp';

const Login: React.FC = () => {

    //Define state for form data
    const [FormData, setFormData] = React.useState({
        usrName: '',
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


    return (
        <main>
            <h1>Physio MarketPlace</h1>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <TextInput label='Username:' name='usrName' type='usrName' required={true} value={FormData.usrName} onChange={handleChange}/>
                <br />
                <PasswordInput label='Password:' name='password' type='password' required={true} value={FormData.password} onChange={handleChange}/>
                <br />
                <button type='submit'>Login</button>
            </form>
        </main>
    )
}

export default Login 