import Products from './Products/Products';
import styles from './CategoryPage.module.css'
import { useSelector ,  useDispatch} from "react-redux";
import { useEffect } from "react";
import {getAllProducts} from '../../redux/actions'

const CategoryPage = () => {
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllProducts())
    },[dispatch])

    let  products = useSelector(state => state.products)


    return(
        <div className={styles.inicio}>
            <Products products={products}/>
        </div>
    )
}

export default CategoryPage;