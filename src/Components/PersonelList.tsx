import Personel from "./Personel";

type personelListProps = {
    personel: {
        id: number,
        firstName: string,
        lastName: string
    }[]
}

export const PersonelList = ({ personel }: personelListProps) => {
    return <ul>
        {
            personel.map(personel => <Personel key={personel.id} firstName={personel.firstName} lastName={personel.lastName} />)
        }
    </ul>
};