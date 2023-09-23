import React, {FC} from 'react';
import './Button.scss'

interface ButtonProps {
    text: string
}

const Button: FC<ButtonProps> = ({text}) => {
    return (
        <div className="button">
            <button>{text}</button>
        </div>
    );
};

export default Button;