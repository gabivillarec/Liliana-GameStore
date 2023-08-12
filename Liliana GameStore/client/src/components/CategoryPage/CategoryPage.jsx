import { useEffect } from "react";
import Products from './Products/Products';
import styles from './CategoryPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, setFilterSearched } from '../../Redux/actions'

const CategoryPage = () => {
    const dispatch = useDispatch();
    const searchedProductList = useSelector(state => state.searchedProductList)

    useEffect(() => {
        if (searchedProductList.valorFiltro === undefined) {
            dispatch(getAllProducts());
        }
        return () => {
            dispatch(setFilterSearched())
        }
    }, []);

    const products = useSelector(state => state.products);

    return (
        <div className={styles.inicio}>
            <Products products={products} />
        </div>
    );
}

export default CategoryPage;
