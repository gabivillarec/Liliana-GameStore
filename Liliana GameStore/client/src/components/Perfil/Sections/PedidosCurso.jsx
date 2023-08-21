import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { URL } from "../../../main"
import Pedidos from "./Pedidos/Pedidos"

const PedidosCurso = ({idUser}) =>{
    const [orders , setOrders] = useState([])

    useEffect(()=>{
        const getOrders = async () => {
            try {
                const response = await axios.get(`${URL}order/${idUser}`);
                setOrders(response.data.reverse());
            } catch (error) {
                console.error('Error al obtener las reseñas:', error);
            }
        };
        getOrders();
    }, [])

    return(
        <div className="card mb-3 border-0" >
            <div className="row g-0">
                <div className="card-body bg-dark">
                    <h5 className="card-title text-primary">Pedidos Realizados</h5>
                    <table className="table">
                        <thead className="bg-dark">
                            <tr className='table-dark'>
                                <th scope="col" className="text-center" >Nº de Orden</th>
                                <th scope="col" className="text-center" >Productos Adquiridos</th>
                                <th scope="col" className="text-center" >Monto</th>
                                <th scope="col" className="text-center" >Estado</th>
                                <th scope="col" className="text-center" >Fecha</th>
                            </tr>
                        </thead>
                    {
                        orders?.map((order , index)=> <Pedidos order={order} key={index}/>)
                    }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PedidosCurso