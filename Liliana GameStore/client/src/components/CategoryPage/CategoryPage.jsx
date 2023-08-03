import Products from './Products/Products';
import styles from './CategoryPage.module.css'
import { useSelector } from "react-redux";

const CategoryPage = () => {
    const { products } = useSelector(state => state)


    return(
        <div className={styles.inicio}>
            <Products products={products}/>
        </div>
    )
}

export default CategoryPage;