
import { useSelector, useDispatch } from "react-redux";
import styles from './Favorites.module.css';
import { getFavorites } from '../../redux/actions';
import { useEffect } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";



const Favorites = () => {
  // Use useSelector to access the Redux store state
    const idUser = JSON.parse(localStorage.getItem('user')) ;
    let dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getFavorites(idUser.id))
    },[dispatch])

    let  products  = useSelector(state => state.favorites)

  // Render the component
    return (
    <div className={styles.inicio}>
        <div className="container">
            <CardsContainer products={products}/>
        </div>
    </div>
    );
};

export default Favorites;
