import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {

    return (
        <div className="form-group row">
            <label htmlFor={name} className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-10">
                <input type="text" className="form-control" {...rest} id={name} />
            </div>
        </div>
    )

}


export default Input