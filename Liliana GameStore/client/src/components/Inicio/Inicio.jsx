//hooks
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//redux
import { get } from "../../redux/actions";
//components
import NavBar from "../Nav/NavBar";




const Inicio = () => {
    const dispatch = useDispatch();
    const charater = useSelector(state => state.estado);
    console.log(charater)
    useEffect(() => {
    dispatch(get());
    //    return () => dispatch(cleanDogs())
    }, [dispatch]);


    return (
        <>
            <NavBar/>
            <button className="btn btn-danger">hola</button>
        </>
    );
}

export default Inicio;
