
import React from 'react';

type TextInputProps = {
    label: string;
    type: string;
    name: string;
    required: boolean;
}

const TextInput: React.FC<TextInputProps> = ({label, name, type, required = false}) => {
    return (
        <label>
            {label}
            <input type={type} name={name} required={required} />
        </label>
    )
}


export default TextInput;