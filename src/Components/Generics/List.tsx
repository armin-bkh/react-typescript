interface listProps<T> {
    list: T[],
    onClick: (item: T) => void;
}

export const List = <T extends {id: number}>({ list, onClick }: listProps<T>) => {
    return (
        <div>
            <h1>your list:</h1>
            <ul>
                {
                    list.map((item, index) => <li key={index} onClick={()=> onClick(item)}>{item?.id}</li>)
                }
            </ul>
        </div>
    )
};