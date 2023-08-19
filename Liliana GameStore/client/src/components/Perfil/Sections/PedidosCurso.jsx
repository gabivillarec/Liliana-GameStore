import Pedidos from "./Pedidos/Pedidos"
import { useState , useEffect } from "react"
import axios from "axios"
import { URL } from "../../../main"
import { useParams } from "react-router-dom"

const PedidosCurso = ({idUser}) =>{
    const [orders , setOrders] = useState([])

    useEffect(()=>{
        const getOrders = async () => {
            try {
                console.log(URL)
                const response = await axios.get(`${URL}order/${idUser}`);
                console.log(response , "response")
                setOrders(response.data);
            } catch (error) {
                console.error('Error al obtener las reseñas:', error);
            }
        };
        getOrders();
    })
    console.log(orders)

    return(
        <div className="card mb-3 border-0" >
            <div className="row g-0">
                <div className="card-body bg-dark">
                    <h5 className="card-title text-primary">Pedidos Realizados</h5>
                    <table className="table">
                        <thead className="bg-dark">
                            <tr className='table-dark'>
                                <th scope="col">N Order</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Monto</th>
                            </tr>
                        </thead>
                    {
                        orders?.map((order , index)=> <Pedidos order={order}  key={index}/>)
                    }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PedidosCurso