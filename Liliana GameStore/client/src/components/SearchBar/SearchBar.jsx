import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { filterSearched, getAllProducts } from '../../Redux/actions.js';
import style from './SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filterValue, setFilterValue] = useState('');

    const handleInputChange = (event) => {
        setFilterValue(event.target.value);
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        if (filterValue.trim() === '') {
            return; // No se realiza la búsqueda si el valor está vacío
        }

        const categories = ["name", "category", "subcategory", "brand"];
        let exito = false;
        for (const category of categories) {
            const query = `${category}=${filterValue}`;
            try {
                const response = await dispatch(getAllProducts(query));
                if (response.payload.data.length > 0) {
                    dispatch(filterSearched(category, filterValue));
                    navigate(`/categorypage`);
                    exito = true;
                    break;
                }
            } catch (error) {
                console.log(error);
            }
        }

        if (!exito) {
            alert("No se encontró ningún producto que coincida con la búsqueda.");
        }
                
        setFilterValue('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event);
        }
    };

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"
                value={filterValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
            <button className="btn btn-outline-info border-2 fs-5 fw-semibold text-uppercase" type="button" onClick={handleSearch} >Buscar</button>
        </form>
    );
};

export default SearchBar;