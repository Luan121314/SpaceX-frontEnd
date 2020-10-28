import React, { InputHTMLAttributes } from 'react';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {

    return (
        <div className="form-group">
            <label htmlFor={name} >{label}</label>
            <textarea className="form-control" {...rest} id={name} required />
        </div>
    )

}


export default TextArea