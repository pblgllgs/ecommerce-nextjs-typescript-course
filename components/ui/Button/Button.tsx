import cn from 'classnames';
import React, { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
    return (
        <button type="button" className={cn(s.root,className)} {...rest}>
            {children}
        </button>
    );
};

export default Button;
