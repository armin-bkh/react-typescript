type horizentalType = 'left' | 'center' | 'right';
type verticalType = 'top' | 'center' | 'bottom';

type toastProps = {
    message: string|number,
    position: Exclude<`${verticalType}-${horizentalType}`, 'center-center'> | 'center',
}


export const Toast = ({message, position}: toastProps) => {
    return (
        <div>{message}{position}</div>
    )
};