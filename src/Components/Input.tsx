import React from "react";

type inputProps = {
    name: string,
    lbl: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ lbl, name, value, onChange }: inputProps) => {
    return (
        <fieldset>
            <label>{lbl}</label>
            <input name={name} type="text" value={value} onChange={onChange}/>
        </fieldset>
    )
};