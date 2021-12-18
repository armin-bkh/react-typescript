type greetProps = {
    name: string,
    age: number,
    isLoggedIn?: boolean,
}

const Greet = ({name, age, isLoggedIn}: greetProps) => {
    // console.log(name, age, isLoggedIn);
    return <h1>{isLoggedIn ? `welcome ${name} ${age}` : `welcome guest`}</h1>
};

export default Greet;