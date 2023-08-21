import { Routes , Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import NavBar from "./components/Nav/NavBar";
import Detail from "./components/Detail/Detail";
import Favorites from './components/Favorites/Favorites'
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Carrito from "./components/Carrito/Carrito";
import MiCuenta from "./components/Perfil/MiCuenta";
import AdminPage from "./components/AdminPage/AdminPage";
import AdminForm from "./components/AdminPage/AdminForm/AdminForm";
import AdminFormUpdate from "./components/AdminPage/AdminFormUpdate/AdminFormUpdate";
import SearchedProducts from "./components/SearchedProducts/SearchedProducts";
import AdminUserEdit from './components/AdminPage/AdminUserEdit/AdminUserEdit'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/categorypage" element={<CategoryPage/>}/>
          <Route path="/micuenta" element={<MiCuenta/>}/>
          <Route path="/adminpage" element={<AdminPage/>}/>
          {/* <Route path="/adminpage/form" element={<AdminForm/>}/> */}
          <Route path="/adminpage/formupdate/:id" element={<AdminFormUpdate/>}/>
          <Route path="/adminpage/adminuseredit/:id" element={<AdminUserEdit/>}/>
          <Route path="/search" element={<SearchedProducts/>}/>
      </Routes>
    </>
  )
}

export default App