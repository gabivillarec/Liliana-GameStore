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
        const categories = ["category", "subcategory", "brand", "name"];
        let filters = "";

        for (const category of categories) {
            if (filterValue) {
                const query = `${category}=${filterValue}`;
                const response = await dispatch(getAllProducts(query));
                if (response && response.payload.length > 0) {
                    navigate("/search");
                    break;
                }}}
        setFilterValue('');
    };    

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"
                value={filterValue} onChange={handleInputChange} />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch} >Buscar</button>
        </form>
    );
};

export default SearchBar;