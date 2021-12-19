import React, { useContext } from "react";
import { UserContext, UserContextAction } from "./UserContext";

export const User = () => {
    const user = useContext(UserContext);
    const setUser = useContext(UserContextAction);
    const loginHandler = () => {
            setUser({
                name: "Armin",
                email: "arminbkh0921@gmail.com"
            })
    }

    const logoutHandler = () => {
            setUser(null);
    }

    return (
        <div>
            <h1>hello {user?.name || "Guest"}</h1>
            <p>your name is {user?.name}</p>
            <p>your email is {user?.email}</p>
            <button onClick={loginHandler}>Login</button>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
};