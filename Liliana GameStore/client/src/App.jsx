import { Routes , Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import NavBar from "./components/Nav/NavBar";
import Detail from "./components/Detail/Detail";
import Favorites from './components/Favorites/Favorites'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/carrito" element={<User/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </>
  )
}

export default App
