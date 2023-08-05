import { useDispatch } from "react-redux";
import CardsContainer from "../../CardsContainer/CardsContainer"
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../redux/actions";
import axios from 'axios'

const Products = ({ products }) => {
    const dispatch = useDispatch()
    const [filtros, setFiltros] = useState({})
    const [subcategories, setSubcategories] = useState([])
    const [brand, setBrand] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/LilianaGameStore/subcategory')
          .then(response => {
            console.log(response.data)
            setSubcategories(response.data);
          })
          .catch(error => {
            console.error('Error al obtener las subcategorías:', error);
          });
        axios.get('http://localhost:3001/LilianaGameStore/brand')
            .then(response => {
                console.log(response.data)
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
        console.log(event.target.name)
        console.log(event.target.value);
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
        <div className="container">
            <div>
                <select name="category" onChange={handleFilter}>
                    <option value="Hardware">Hardware</option>
                    <option value="VideoGames">VideoGames</option>
                    <option value="Accessories">Accessories</option>
                </select>
                <select name="subcategory" onChange={handleFilter}>
                    {subcategories?.map((subcategory) => (
                        <option value={subcategory.name}>
                        {subcategory.name}
                        </option>
                    ))}
                </select>
                <select name="brand" onChange={handleFilter}>
                    {brand?.map((brand) => (
                        <option value={brand.name}>
                        {brand.name}
                        </option>
                    ))}
                </select>
                <select name="order" onChange={handleFilter}>
                    <option value="D">Min-Max</option>
                    <option value="A">Max-Min</option>
                </select>
                <button onClick={() => handleBtnFiltrar()}>Filtrar</button>
            </div>
            <CardsContainer products={products}/>
        </div>
    )
}

export default Products;