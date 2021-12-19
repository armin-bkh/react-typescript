import { createContext } from "react";
import { userContextActionType, userContextType } from "./User.types";


export const UserContext = createContext({} as userContextType);
export const UserContextAction = createContext<userContextActionType>({} as userContextActionType);