import "./todo.css";

// props

function Todos({ num }) {
    return (<h1 className="heading">Todo : {num}{" "}</h1>)
}

export default Todos;