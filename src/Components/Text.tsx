type textProps = {
 styles: React.CSSProperties,
 children: React.ReactNode,
}

export const Text = ({ styles, children }: textProps) => {
    return (
        <p style={styles} >
            {children}
        </p>
    )
};