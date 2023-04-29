import './App.css'
import NavBar from "./components/navigation/NavBar"
import Home from "./components/pages/Home"
import NavReseaux from "./components/navigation/NavReseaux"
import Roster from './components/pages/Roster'
import Awards from './components/pages/Awards'

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <NavReseaux/>
      <Roster/>
      <Awards/>
    </div>
  )
}

export default App
