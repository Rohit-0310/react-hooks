import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todo";

function App() {
    const arr = ["Wake Up", "Happy Tea", "Attend Scrum"," DSA Contest/DSA Class","Coading Class", "Coading Assignmrnt"];

    return (
        <div className="App">
            {arr.map((e) => (
                <Todos num={e}/>
            ))};
        </div>
    );
}


export default App;
