import Player from "./Components/Player"


function App() {
  
  return (
    <main>
      <div id="game-container">
        GAME BOARD
        <ol id="players">
         <Player initialName="Player 1" symbol="X"/>
         <Player initialName="Player 2" symbol="O"/>
        </ol>
      </div>
      <h1>React Tic-Tac-Toe</h1>
    </main>
  )
}

export default App
