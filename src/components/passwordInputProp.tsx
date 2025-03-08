import React from 'react';

//Define the properties that the component will accept
type PasswordInputProps = {
    label: string;
    type: string;
    name: string;
    required?: true;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//Define component that returns JSX
const passwordInputs: React.FC<PasswordInputProps> = ({label, type, name, required = false, value, onChange}) => {
    return (
        <label>
            {label}
            <input name={name} type={type} required={required} value={value} onChange={onChange} />
        </label>
    )
}

export default passwordInputs;