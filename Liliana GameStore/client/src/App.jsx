import { Routes , Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import NavBar from "./components/Nav/NavBar";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/detail" element={<User/>}/>
      </Routes>
    </>
  )
}

export default App
