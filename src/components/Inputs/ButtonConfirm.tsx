import React, {InputHTMLAttributes} from 'react';

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>{
    label: string;
}


const ButtonConfirm:React.FC<ButtonProps> = ({label, ...rest})=>{
    return(
    <button className="btn btn-primary" {...rest} type="button">{label}</button>
    )
}

export default ButtonConfirm

