import clouds from "./img/clouds.png"
import mario from "./img/mario.gif"
import pipe from "./img/pipe.png"
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
