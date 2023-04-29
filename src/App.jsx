import './App.css'
import NavBar from "./components/navigation/NavBar"
import Home from "./components/pages/Home"
import NavReseaux from "./components/navigation/NavReseaux"
import Roster from "./components/pages/Roster"

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <NavReseaux/>
      <Roster/>
    </div>
  )
}

export default App
