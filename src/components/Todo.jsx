import "./todo.css";

// props

function Todos({ num, children}) {
    return (
    <h1 className="heading">{children}</h1>)
}

export default Todos;