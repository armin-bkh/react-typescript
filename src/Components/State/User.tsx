import { useState, useEffect } from "react";

type userType = {
    name: string,
    email: string
}

export const User = () => {
    const [user, setUser] = useState({} as userType);

    useEffect(() => {
        setUser({
            name: "Armin Bakhshi",
            email: "arminbkh0921@yahoo.com",
        })
    }, []);

    // const logoutHandler = () => {
    //     setUser(null);
    // }

    return (
        <div>
            <h1>hello {user ? user.name : 'guest'}</h1>
        {/* <button onClick={loginHandler}>login</button> */}
        {/* <button onClick={logoutHandler}>logout</button> */}

            <p>your name is {user.name}</p>
            <p>your email is {user.email}</p>

        </div>
    )
};