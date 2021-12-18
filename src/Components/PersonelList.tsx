import Personel from "./Personel";

import { personelListProps } from "./PersonelList.type";


export const PersonelList = ({ personel }: personelListProps) => {
    return <ul>
        {
            personel.map(personel => <Personel key={personel.firstName} firstName={personel.firstName} lastName={personel.lastName} />)
        }
    </ul>
};