import React from "react";

type buttonProps = {
    value: string,
    type: 'button' | 'submit' | 'reset',
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ value, type, onClick }: buttonProps) => {
    return (
        <button type={type} onClick={onClick}>
            {value}
        </button>
    )
};