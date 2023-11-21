import Board from "./components/board/Board";

function App() {

  return (
    <>
      <h1>
        {`Conway's Game of Life`}
      </h1>
      <Board rows={6} columns={8} />
    </>
  )
}

export default App
