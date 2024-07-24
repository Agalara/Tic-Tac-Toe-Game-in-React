import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import { useState } from "react"


function App() {
  
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare () {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
         <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
         <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/> 
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <h1>React Tic-Tac-Toe</h1>
    </main>
  )
}

export default App
