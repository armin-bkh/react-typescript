import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export const InputFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusHandler = () => {
        inputRef.current?.focus();
    }

    return (
        <div>
            <Input ref={inputRef} />
            <button onClick={focusHandler}>focus</button>
        </div>
    )
};

const Input = forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
    return (
        <input type="text" ref={ref} />
    )
})