import "./todo.css";

// props

function Todos({ num, age}) {
    return (
    <h1
     className="heading">
        {" "}
        {age} Todo : 
    </h1>)
}

export default Todos;