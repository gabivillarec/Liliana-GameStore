import TablaProduts from "./TablaProduct/TablaProduts"
import { useSelector , useDispatch } from "react-redux";
import {getAdminProducts} from '../../../redux/actions'
import { useEffect , useState} from "react";
import axios from "axios";

import Buttons from "./TablaProduct/Buttons";

const AdminGetProduct = () =>{
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAdminProducts())
    },[dispatch])
    let  products  = useSelector(state => state.adminProducts)

    const [filtros, setFiltros] = useState({})
    const [subcategories, setSubcategories] = useState([])
    const [brand, setBrand] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/LilianaGameStore/subcategory')
          .then(response => {
            console.log(response.data , 'subcategori')
            setSubcategories(response.data);
          })
          .catch(error => {
            console.error('Error al obtener las subcategorías:', error);
          });
        axios.get('http://localhost:3001/LilianaGameStore/brand')
            .then(response => {
                console.log(response.data , "brand")
                setBrand(response.data);
            })
            .catch(error => {
                console.error('Error al obtener las subcategorías:', error);
            });
      }, []);

    function objectToString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
          }
        }
        return keyValuePairs.join('&');
    }

    const handleFilter = (event) => {

        console.log('handlerFil;ter')
        console.log(event.target.name)
        console.log(event.target.value);
        setFiltros({
            ...filtros,
            [event.target.name] : event.target.value
        })
        console.log(filtros)
    }

    const handleBtnFiltrar = () => {
        console.log('handlerBtN')
        const resultString = objectToString(filtros)
        dispatch(getAdminProducts(resultString))
    } 

    
    return(

      <div className= 'container'>
        <div className='container'>
          <Buttons  handleBtnFiltrar={handleBtnFiltrar}  handleFilter={handleFilter} subcategories={subcategories} brand={brand}/>
          <table className="table align-middle mb-0 bg-white">
          <thead className="bg-dark">
            <tr className='table-dark'>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <TablaProduts products={products}/>
          </table>
        </div>
      </div>

    )
}

export default AdminGetProduct