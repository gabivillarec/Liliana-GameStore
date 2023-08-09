import React, { useEffect } from "react";
import Products from './Products/Products';
import styles from './CategoryPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllProducts } from '../../redux/actions'

const CategoryPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const searchParams = Object.fromEntries(queryParams.entries());

    useEffect(() => {
        if (Object.keys(searchParams).length > 0) {
            const queryString = new URLSearchParams(searchParams).toString();
            dispatch(getAllProducts(queryString));
        } else {
            dispatch(getAllProducts());
        }
    }, [dispatch, location.search]);

    const products = useSelector(state => state.products);

    return (
        <div className={styles.inicio}>
            <Products products={products} />
        </div>
    );
}

export default CategoryPage;
