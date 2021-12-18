import { personelProps } from "./Personel.type";

const Personel = ({ firstName, lastName }: personelProps) => {
    return <li>{firstName} {lastName}</li>
};

export default Personel;