import logo from './logo.svg';
import './App.css';
import Todos from "./components/Todo";

function App() {
    const arr = ["Wake Up", "Happy Tea", "Attend Scrum"," DSA Contest/DSA Class","Coading Class", "Coading Assignmrnt"];

    return (
        <div className="App">
            {arr.map((e) => (
                <Todos num={e}>
                <h1>test</h1>
                </Todos>
            ))};
        </div>
    );
}


export default App;
