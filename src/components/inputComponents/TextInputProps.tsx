
import React from 'react';

// Define property types with TypeScript
type TextInputProps = {
    label: string;
    type: string;
    name: string;
    required: boolean;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Define component that returns JSX
const TextInput: React.FC<TextInputProps> = ({label, name, type, required = false, value, onChange}) => {
    return (
        <label>
            {label}
            <input type={type} name={name} required={required} value={value} onChange={onChange}/>
        </label>
    )
}


export default TextInput;