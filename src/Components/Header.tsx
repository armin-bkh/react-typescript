type headerProps = {
    children: React.ReactNode
}

const Header = ({children}: headerProps) => {
    return (
        <header>
            {children}
        </header>
    )
};

export default Header;