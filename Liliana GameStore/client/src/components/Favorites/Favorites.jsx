
import { useSelector, useDispatch } from "react-redux";
import styles from './Favorites.module.css';
import { getFavorites } from '../../redux/actions';
import { useEffect } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";



const Favorites = () => {
  // Use useSelector to access the Redux store state
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getFavorites())
    },[dispatch])

    let  products  = useSelector(state => state.favorites)
    let productsRender = products.map((prod) => prod.product)

  // Render the component
    return (
    <div className={styles.inicio}>
        <div className="container">
            <CardsContainer products={productsRender}/>
        </div>
    </div>
    );
};

export default Favorites;
