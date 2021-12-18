type statusProps = {
    status: "loading" | "success" | "error";
}

const Status = ({ status }: statusProps) => {
    return (
        <h1>{ status === "loading" ? 'loading please wait...' : status === 'success' ? 'youre already loged in' : 'please try again'}</h1>
    )
};

export default Status;