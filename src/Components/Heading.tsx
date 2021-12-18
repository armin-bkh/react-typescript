type headingProps = {
    children: string,
}

export const Heading = ({ children }: headingProps) => {
    return (
        <h1>{children}</h1>
    )
};