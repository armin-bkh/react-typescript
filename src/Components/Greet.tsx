type greetProps = {
    name: string,
    age: number,
    isLoggedIn: boolean,
}

const Greet = ({name, age, isLoggedIn}: greetProps) => {
    return <h1>{isLoggedIn ? `welcome ${name} ${age}` : `welcome guest`}</h1>
};

export default Greet;