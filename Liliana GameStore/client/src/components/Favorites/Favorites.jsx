import { useSelector, useDispatch } from "react-redux";
import styles from './Favorites.module.css';
import { getFavorites } from '../../Redux/actions';
import { useEffect, useState } from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import ValidationLoginCard from "../ValidationLoginCard/ValidationLoginCard";

const Favorites = () => {
  // Use useSelector to access the Redux store state
  let  products  = useSelector(state => state.favorites)
  let dispatch = useDispatch()
  const idUser = JSON.parse(localStorage.getItem('user')) ;
  const [logueado, setLogueado] = useState(false)

  useEffect(()=> {
    if(!idUser){
      setLogueado(false)
    }else{
      dispatch(getFavorites(idUser.id))
      setLogueado(true)
    }
  },[dispatch])


  // Render the component
  return (
  <div className={styles.inicio}>
    {
      logueado ? (
        <div className="container">
          <CardsContainer products={products}/>
        </div>
      )
      : (
        <ValidationLoginCard/>
      )
    }
      
  </div>
  );
};

export default Favorites;
