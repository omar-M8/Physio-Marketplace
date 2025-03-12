import React from 'react';

//Define the properties that the component will accept
type PasswordInputProps = {
    label: string;
    type: string;
    name: string;
    required?: true;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//Define component that returns JSX
const passwordInputs: React.FC<PasswordInputProps> = ({label, type, name, required = false, onChange}) => {
    return (
        <label>
            {label}
            <input name={name} type={type} required={required} onChange={onChange} />
        </label>
    )
}

export default passwordInputs;