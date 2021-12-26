import "./todo.css";

// props

function Todos({ num, age , data2}) {
    return (
    <h1 className="heading">
        {" "}
        {age} Todo : {num}{" "} {data2}
    </h1>)
}

export default Todos;