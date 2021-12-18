type personelProps = {
    firstName: string,
    lastName: string,
}

const Personel = ({ firstName, lastName }: personelProps) => {
    return <li>{firstName} {lastName}</li>
};

export default Personel;