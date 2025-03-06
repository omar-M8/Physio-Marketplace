import React from 'react';

type PasswordInputProps = {
    label: string;
    name: string;
    required?: true;
}

const passwordInputs: React.FC<PasswordInputProps> = ({label, name, required = false}) => {
    return (
        <label>
            {label}
            <input type='password' name={name} required={required} />
        </label>
    )
}

export default passwordInputs;