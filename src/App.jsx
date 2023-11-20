import Board from "./components/board/Board";

function App() {

  return (
    <>
      <h1>
        Game Of Life
      </h1>
      <Board rows={20} columns={20} />
    </>
  )
}

export default App
