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
        <div className="card">
            <button className="btn btn-danger">hola</button>
        </div>
    );
}

export default Inicio;
