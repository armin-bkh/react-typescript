import { useState } from "react";
import { userType } from "./User.types";
import { UserContext, UserContextAction } from "./UserContext";

type userProviderProps = {
    children: React.ReactNode
}

export const UserProvider = ({ children }: userProviderProps) => {
    const [user, setUser] = useState<userType | null>(null);
    return (
        <UserContext.Provider value={user}>
            <UserContextAction.Provider value={setUser}>
            {children}
            </UserContextAction.Provider>
        </UserContext.Provider>
    )
};