type buttonProps = {
    variant: string,
    children: string,
} & Omit<React.ComponentProps<'button'>, 'children'>;

export const Button = ({ variant, children,...rest }: buttonProps) => {
    return (
        <button style={{color: variant}} {...rest}>{children}</button>
    )
};