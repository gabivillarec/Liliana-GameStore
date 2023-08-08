import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../CardsContainer/CardsContainer"
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../redux/actions";
import axios from 'axios'
import style from "./Products.module.css"

const Products = ({ products }) => {
    const dispatch = useDispatch()
    const [filtros, setFiltros] = useState({ pageNumber: 1, })
    const [subcategories, setSubcategories] = useState([])
    const [brand, setBrand] = useState([])
    const totalPages = useSelector(state => state.totalPages)
    const currentPage = useSelector(state => state.currentPage)


    useEffect(() => {
        axios.get('http://localhost:3001/LilianaGameStore/subcategory')
          .then(response => {
            setSubcategories(response.data);
          })
          .catch(error => {
            console.error('Error al obtener las subcategorías:', error);
          });
        axios.get('http://localhost:3001/LilianaGameStore/brand')
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
        console.log(filtros)
    }

    const handleBtnFiltrar = () => {
        const resultString = objectToString(filtros)
        dispatch(getAllProducts(resultString))
    }
    
    //sector de botones de paginado

    useEffect(()=>{
        handleBtnFiltrar()
    },[filtros.pageNumber])

    const generatePaginationButtons = (totalPages) => {
        const paginationButtons = [];
      
        if (currentPage > 1) {
          paginationButtons.push(
            <button key="prev" className="btn btn-info" onClick={() => setFiltros({...filtros, pageNumber: currentPage - 1})}>
              Anterior
            </button>
          );
        }
      
        for (let i = 1; i <= totalPages; i++) {
          paginationButtons.push(
            <button
              key={i}
              className={i === currentPage ? "btn btn-info" : "btn btn-outline-info"}
              onClick={() => setFiltros({...filtros, pageNumber: i})}
            >
              {i}
            </button>
          );
        }
      
        if (currentPage < totalPages) {
          paginationButtons.push(
            <button key="next" className="btn btn-info" onClick={() => setFiltros({...filtros, pageNumber: currentPage + 1})}>
              Siguiente
            </button>
          );
        }
      
        return paginationButtons;
      };

    return(
        <div className={style.fondo}>
            <div className={style.productsContainer}>
                <div className="container d-flex justify-content-center flex-column">
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2 mt-4">
                        <select className={style.selects} name="category" onChange={handleFilter}>
                            <option value="">All Categories</option>
                            <option value="Hardware">Hardware</option>
                            <option value="VideoGames">VideoGames</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                        <select className={style.selects} name="subcategory" onChange={handleFilter}>
                            <option value="">All Subcategories</option>
                            {subcategories?.map((subcategory) => (
                                <option value={subcategory.name}>
                                {subcategory.name}
                                </option>
                            ))}
                        </select>
                        <select className={style.selects} name="brand" onChange={handleFilter}>
                            <option value="">All brands</option>
                            {brand?.map((brand) => (
                                <option value={brand.name}>
                                {brand.name}
                                </option>
                            ))}
                        </select>
                        <select className={style.selects} name="order" onChange={handleFilter}>
                            <option value="D">Min-Max</option>
                            <option value="A">Max-Min</option>
                        </select>
                        <button className="btn btn-outline-info border-2" onClick={() => handleBtnFiltrar()}>Filtrar</button>
                    </div>
                    <CardsContainer products={products}/>
                    <div className="p-4 d-flex justify-content-center flex-row gap-3">{generatePaginationButtons(totalPages)}</div>
                </div>
            </div>
        </div>
    )
}

export default Products;