export interface profileProps {
    fullName: string
}

export const Profile = ({ fullName }: profileProps) => {
    return (
        <h1>{fullName}</h1>
    )
};