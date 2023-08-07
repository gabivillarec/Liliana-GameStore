import { useDispatch } from "react-redux";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../../redux/actions"
import axios from 'axios'
import style from "./AdminItem.module.css"
import TablaProduts from "./TablaProduts";
//Products.module.css

const BotonesItem = ({ products }) => {
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
      }, [products]);

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
        
        <div className={style.fondo}>
            <Buttons handleFilter={handleFilter} handleBtnFiltrar={handleBtnFiltrar} subcategories={subcategories} brand={brand}/>
            <TablaProduts products={products}/>
        </div>

    )
}

export default BotonesItem;