import clouds from "/src/img/clouds.png"
import mario from "/src/img/mario.gif"
import pipe from "/src/img/pipe.png"
import './App.css'

function App() {

  return (
    <div className="game-board">
      <img src={clouds} className="clouds"/>
      <img src={pipe} className="pipe"/>
      <img src={mario} className="mario"/>
      <div id="container"></div>
  </div>
  )
}

export default App
