import { useDispatch, useSelector } from "react-redux";
import CardsContainer from "../../CardsContainer/CardsContainer"
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../Redux/actions";
import axios from 'axios'
import style from "./Products.module.css"
import { URL } from "../../../main";

const Products = ({ products }) => {
    const dispatch = useDispatch()
    const searchedProductList = useSelector(state => state.searchedProductList)
    const totalPages = useSelector(state => state.totalPages)
    const currentPage = useSelector(state => state.currentPage)
    const [filtros, setFiltros] = useState({ pageNumber: 1, [searchedProductList.nombreFiltro] : searchedProductList.valorFiltro, })
    const [subcategories, setSubcategories] = useState([])
    const [brand, setBrand] = useState([])


    useEffect(() => {

        axios.get(`${URL}subcategory`).then(response => {
            setSubcategories(response.data);
          })
          .catch(error => {
            console.error('Error al obtener las subcategorías:', error);
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
        <div className={style.fondo}>
            <div className={style.productsContainer}>
                <div className="d-flex justify-content-center flex-column">
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2 mt-4">
                        <select className={style.selects} name="category" onChange={handleFilter}>
                            <option value="">Categorías</option>
                            <option value="Accessories">Accesorios</option>
                            <option value="Hardware">Hardware</option>
                            <option value="VideoGames">Videojuegos</option>
                        </select>
                        <select className={style.selects} name="subcategory" onChange={handleFilter}>
                            <option value="">Sub-Categorías</option>
                            {subcategories ?.sort((a, b) => a.name.localeCompare(b.name)).map((subcategory) => (
                                    <option key={subcategory.name} value={subcategory.name}>
                                        {subcategory.name}
                                    </option>
                                ))}
                        </select>
                        <select className={style.selects} name="brand" onChange={handleFilter}>
                            <option value="">Marcas</option>
                            {brand?.sort((a, b) => a.name.localeCompare(b.name)).map((brand) => (
                                <option value={brand.name} key={brand.name}>
                                    {brand.name}
                                </option>
                            ))}
                        </select>
                        <select className={style.selects} name="order" onChange={handleFilter}>
                            <option value="">Precio</option>
                            <option value="D">Min-Max</option>
                            <option value="A">Max-Min</option>
                        </select>
                        <button className="btn btn-outline-info border-2 fw-semibold text-uppercase" onClick={() => {filtros.pageNumber === 1 ? handleBtnFiltrar() : setFiltros({...filtros, pageNumber: 1})}}>Filtrar</button>
                    </div>
                    <CardsContainer products={products}/>
                    <div className="p-2 d-flex justify-content-center flex-row gap-3">{generatePaginationButtons(totalPages)}</div>
                </div>
            </div>
        </div>
    )
}

export default Products;