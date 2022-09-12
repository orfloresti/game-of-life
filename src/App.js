import "./App.css";
import { matrix, lifeStep } from "./core/life";
import Cell from './components/cell';

function App() {
  let life = matrix;
  let state = true; 

  const step = () => {
    state = !state;
    life = lifeStep(life);
    //console.table(life);
    console.log(state);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of life</h1>
        <Cell life={!state} ></Cell>
        <Cell life={state} ></Cell>
        <button onClick={step}> Run step</button>
      </header>
    </div>
  );
}

export default App;
