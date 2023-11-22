import Board from "./components/board/Board";

function App() {

  return (
    <>
      <h1>
        {`Conway's Game of Life`}
      </h1>
      <Board rows={20} columns={30} />
    </>
  )
}

export default App
