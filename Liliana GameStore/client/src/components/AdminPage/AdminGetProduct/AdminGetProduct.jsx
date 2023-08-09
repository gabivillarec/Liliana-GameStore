import TablaProduts from "./TablaProduct/TablaProduts"
import { useSelector , useDispatch } from "react-redux";
import {getAdminProducts} from '../../../Redux/actions'
import { useEffect , useState} from "react";
import axios from "axios";

import Buttons from "./TablaProduct/Buttons";

const AdminGetProduct = () =>{
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAdminProducts())
    },[dispatch , deleteTrigger])
    let  products  = useSelector(state => state.adminProducts)

    const [filtros, setFiltros] = useState({})
    const [subcategories, setSubcategories] = useState([])
    const [brand, setBrand] = useState([])

    useEffect(() => {
        axios.get('/LilianaGameStore/subcategory')
          .then(response => {
            setSubcategories(response.data);
          })
          .catch(error => {
          });
        axios.get('/LilianaGameStore/brand')
            .then(response => {
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
        setFiltros({
            ...filtros,
            [event.target.name] : event.target.value
        })
    }

    const handleBtnFiltrar = () => {
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
              <th>Category</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <TablaProduts products={products} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} />
          </table>
        </div>
      </div>

    )
}

export default AdminGetProduct