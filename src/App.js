import "./App.css";
import { matrix, lifeStep } from "./core/life";

function App() {
  let life = matrix;

  const step = () => {
    life = lifeStep(life);
    console.table(life);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of life</h1>
        <button onClick={step}> Run step</button>
      </header>
    </div>
  );
}

export default App;
