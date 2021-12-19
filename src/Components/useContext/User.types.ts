export type userType = {
    name: string,
    email: string,
};

// export type userContextType = {
//     user: userType | null,
//     setUser: React.Dispatch<React.SetStateAction<userType | null>>,
// }


export type userContextType = userType | null;

export type userContextActionType = React.Dispatch<React.SetStateAction<userType | null>>;