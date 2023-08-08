import { useDispatch } from "react-redux";
import CardsContainer from "../../CardsContainer/CardsContainer"
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../redux/actions";
import axios from 'axios'
import style from "./Products.module.css"

const Products = ({ products }) => {
    const dispatch = useDispatch()
    const [filtros, setFiltros] = useState({})
    const [subcategories, setSubcategories] = useState([])
    const [brand, setBrand] = useState([])

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

    return(
        <div className={style.fondo}>
            <div className={style.productsContainer}>
                <div className="container d-flex flex-column">
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
                </div>
            </div>
        </div>
    )
}

export default Products;