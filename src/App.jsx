import './App.css'
import NavBar from "./components/navigation/NavBar"
import Home from "./components/pages/Home"
import NavReseaux from "./components/navigation/NavReseaux"
import Roster from './components/pages/Roster'
import Awards from './components/pages/Awards'
import Twitch from './components/pages/Twitch'

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <NavReseaux/>
      <Roster/>
      <Awards/>
      <Twitch/>
    </div>
  )
}

export default App
