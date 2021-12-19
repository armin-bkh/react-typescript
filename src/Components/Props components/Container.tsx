import { Login } from "./Login";
import { Profile, profileProps } from "./Profile";

interface containerProps {
    isLoggedIn?: boolean,
    component: React.ComponentType<profileProps>,
}

export const Container = ({ isLoggedIn, component: Component }: containerProps) => {
    if(isLoggedIn) return <Component fullName="Armin Bakhshi" />
    return <Login />
};