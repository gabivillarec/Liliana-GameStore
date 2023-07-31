import { Routes , Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import NavBar from "./components/Nav/NavBar";
import './App.css'

function App() {


  return (
    <>
        <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/navbar" element={<NavBar/>}/>
        
      </Routes>
    </>
  )
}

export default App
