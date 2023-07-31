import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get } from "../../redux/actions";
import styles from './Inicio.module.css';
import Card from '../Card/Card';

const Inicio = () => {
    const dispatch = useDispatch();
    const charater = useSelector(state => state.estado);
    console.log(charater)
    useEffect(() => {
    dispatch(get());
    //    return () => dispatch(cleanDogs())
    }, [dispatch]);


    return (
        <div className={styles.container}>
            {charater && charater.map((char, index) => (
            <Card key={index} name={char?.name} img={char?.image} />
            ))}
        </div>
    );
}

export default Inicio;
