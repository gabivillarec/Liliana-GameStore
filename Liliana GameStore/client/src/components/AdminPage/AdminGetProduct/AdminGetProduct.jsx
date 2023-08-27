import TablaProduts from "./TablaProduct/TablaProduts"
import { useSelector , useDispatch } from "react-redux";
import {getAllProducts} from '../../../Redux/actions'
import { useEffect , useState} from "react";
import axios from "axios";
import { URL } from "../../../main";
import Buttons from "./TablaProduct/Buttons";

const AdminGetProduct = () =>{
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    let dispatch = useDispatch()
    let  products  = useSelector(state => state.products)
    const searchedProductList = useSelector(state => state.searchedProductList)
    const totalPages = useSelector(state => state.totalPages)
    const currentPage = useSelector(state => state.currentPage)
    const [filtros, setFiltros] = useState({ pageNumber: 1, [searchedProductList.nombreFiltro] : searchedProductList.valorFiltro, })
    const [subcategories, setSubcategories] = useState([])
    const [brand, setBrand] = useState([])
    
    useEffect(()=> {
        dispatch(getAllProducts())
    },[dispatch , deleteTrigger])

    useEffect(() => {
        axios.get(`${URL}subcategory`)
          .then(response => {
            setSubcategories(response.data);
          })
          .catch(error => {
            console.log(error)
          });
        axios.get(`${URL}brand`)
            .then(response => {
                setBrand(response.data);
            })
            .catch(error => {
                console.error('Error al obtener las subcategorías:', error);
            });
      }, []);
      
    useEffect(()=> {
      setFiltros({
        ...filtros,
        [searchedProductList.nombreFiltro] : searchedProductList.valorFiltro
      })
    },[searchedProductList])
    useEffect(()=>{
      handleBtnFiltrar()
  },[filtros.pageNumber])

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
        dispatch(getAllProducts(resultString))
    } 
    const generatePaginationButtons = (totalPages) => {
      const paginationButtons = [];
      const maxButtonsToShow = 5
      let startPage;

      if (currentPage <= Math.floor(maxButtonsToShow / 2)) {
          startPage = 1;
        } else if (currentPage > totalPages - Math.floor(maxButtonsToShow / 2)) {
          startPage = Math.max(1, totalPages - maxButtonsToShow + 1);
        } else {
          startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        }
    
      if (currentPage > 1) {
        paginationButtons.push(
          <button key="prev" className="btn btn-info" onClick={() => {setFiltros({...filtros, pageNumber: currentPage - 1}); window.scrollTo(0, 0)}}>
            Anterior
          </button>
        );
      }
    
      for (let i = startPage; i <= Math.min(totalPages, startPage + maxButtonsToShow - 1); i++) {
        paginationButtons.push(
          <button
            key={i}
            className={i === currentPage ? "btn btn-info" : "btn btn-outline-info"}
            onClick={() => {setFiltros({...filtros, pageNumber: i}); window.scrollTo(0, 0)}}
          >
            {i}
          </button>
        );
      }
    
      if (currentPage < totalPages) {
        paginationButtons.push(
          <button key="next" className="btn btn-info" onClick={() => {setFiltros({...filtros, pageNumber: currentPage + 1}); window.scrollTo(0, 0)}}>
            Siguiente
          </button>
        );
      }
    
      return paginationButtons;
    };


    return(

      <div className= 'container'>
        <div className='container'>
        <div className="p-2 d-flex justify-content-center flex-row gap-3">{generatePaginationButtons(totalPages)}</div>
          <Buttons  handleBtnFiltrar={handleBtnFiltrar}  handleFilter={handleFilter} subcategories={subcategories} brand={brand}/>
          <table className="table align-middle mb-0 bg-white">
          <thead className="bg-dark">
            <tr className='table-dark'>
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col" className="text-center" >Categoría</th>
              <th scope="col" className="text-center" >Precio</th>
              <th scope="col" className="text-center" >Stock</th>
              <th scope="col" className="text-center" >Pausado</th>
              <th scope="col" className="text-center" >Editar</th>
              <th scope="col" className="text-center" >Eliminar</th>
            </tr>
          </thead>
          <TablaProduts products={products} deleteTrigger={deleteTrigger} setDeleteTrigger={setDeleteTrigger} />
          </table>
        </div>
      </div>

    )
}

export default AdminGetProduct