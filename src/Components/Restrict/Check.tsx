interface checkValueType {
    value: string,
}


type checkPositiveType = checkValueType & {
    isPositive: boolean,
    isNagative?: never,
    isZero?: never,
}

type checkNagativeType = checkValueType & {
    isNagative: boolean,
    isPositive?: never,
    isZero?: never,
}

type checkZeroType = checkValueType & {
    isZero: boolean,
    isNagative?: never,
    isPositive?: never,
}

type checkProps = checkNagativeType | checkPositiveType | checkZeroType;

export const Check = ({value, isPositive, isNagative, isZero}: checkProps) => {
    return (
        <div>
            <h1>{value}</h1>
            <p>{isPositive ? "positive" : isNagative ? "nagative" : isZero ? "zero" : null}</p>
        </div>
    )
};