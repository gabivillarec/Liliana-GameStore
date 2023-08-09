import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from '../../redux/actions.js'
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
        let queryCategory = "";
    
        for (const category of categories) {
            if (category === "name" && filterValue) {
                queryCategory = `name=${filterValue}`;
                break;
            } else if (category === "category" && filterValue) {
                queryCategory = `category=${filterValue}`;
                break;
            } else if (category === "subcategory" && filterValue) {
                queryCategory = `subcategory=${filterValue}`;
                break;
            } else if (category === "brand" && filterValue) {
                queryCategory = `brand=${filterValue}`;
                break;
            }
        }    
        if (queryCategory) {
            navigate(`/search?${queryCategory}`);
        }    
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