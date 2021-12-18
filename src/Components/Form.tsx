import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export const Form = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        email: ''
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
        console.log(formValue);
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValue);
    }

    return (
        <form onSubmit={submitHandler}>
            <Input name="name" lbl="Name" value={formValue.name} onChange={changeHandler} />
            <Input name="email" lbl="Email" value={formValue.email} onChange={changeHandler} />
            <Button type="submit" value="submit" />
        </form>
    )
};