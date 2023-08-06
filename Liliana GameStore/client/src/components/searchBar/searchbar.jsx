import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    
    const [filters, setFilters] = useState({
        name: '',
        category: '',
        subcategory: '',
        brand: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    }

    const handleSearch = () => {
        const filtros = new URLSearchParams(filters).toString();
        onSearch(filtros);
        console.log(handleSearch)
    }

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" name="name"
                onChange={handleChange} value={filters.name} />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Buscar</button>
        </form>
    );
};


export default SearchBar;