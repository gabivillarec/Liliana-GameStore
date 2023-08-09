import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { filterSearched, getAllProducts } from '../../redux/actions.js'
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
        const categories = ["name", "category", "subcategory", "brand"];
        let exito = false
        let filters = "";
        for (const category of categories) {
            if (filterValue) {
                const query = `${category}=${filterValue}`;
                try {
                    await dispatch(getAllProducts(query))
                    .then(response => {
                        if(response.payload.data.length > 0){
                            dispatch(filterSearched(category, filterValue))
                            navigate(`/categorypage`);
                            exito = true
                        }
                    })
                } catch (error) {
                    console.log(error)
                }
                if (exito){break}
                // if (response && ) {
                //     
                    
                    
                // }
            }}
                
        setFilterValue('');
    };    

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"
                value={filterValue} onChange={handleInputChange} />
            <button className="btn btn-outline-info" type="button" onClick={handleSearch} >Buscar</button>
        </form>
    );
};

export default SearchBar;