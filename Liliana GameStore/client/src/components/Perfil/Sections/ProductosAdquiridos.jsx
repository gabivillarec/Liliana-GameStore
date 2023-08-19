import { useState , useEffect } from "react"
import axios from "axios"
import { URL } from "../../../main";
import ComprasConComentarios from './Adquisiciones/ComprasConComentarios';
import ComprasSinComentarios from './Adquisiciones/ComprasSinComentarios';

const ProductosAdquiridos = ({id}) => {

    const [orderData, setOrderData] = useState([]);
    const [reviewsDone, setReviewsDone] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await axios.get(`${URL}order/${id}`);
                setOrderData(response.data);
            } catch (error) {
                console.error('Error al obtener los pedidos:', error);
            }
        };
        getOrders();
    }, [id]);    

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await axios.get(`${URL}review/user/${id}`);
                setReviewsDone(response.data);
            } catch (error) {
                console.error('Error al obtener las reseñas:', error);
            }
        };
        getReviews();
    }, [id]);

    const handleRefresh = async () => {
        try {
            const responseOrders = await axios.get(`${URL}order/${id}`);
            setOrderData(responseOrders.data);
            const responseReviews = await axios.get(`${URL}review/user/${id}`);
            setReviewsDone(responseReviews.data);
        } catch (error) {
            console.error('Error al actualizar datos:', error);
        }
    };

    return (
        <div className="card mb-3 border-0">
            <div className="row g-0">
                <div className="card-body bg-dark">
                    <h5 className="card-title text-primary">Productos Adquiridos</h5>
                    <table className="table">
                        <thead className="bg-dark">
                            <tr className='table-dark'>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center" >Precio</th>
                                <th scope="col" className="text-center" >Calificación</th>
                                <th scope="col" className="text-center" >Comentar</th>
                                <th scope="col" className="text-center" >Fecha</th>
                            </tr>
                        </thead>
                            {orderData.map(order => {
                                if (order.estado === "exitoso") {
                                    return order.products.map(product => {
                                        const hasReview = reviewsDone.some(review => review.productId === product.id);
                                        return hasReview ? (
                                            <ComprasConComentarios
                                                key={product.id}
                                                userId={order.user.id}
                                                productId={product.id}
                                                commentId={reviewsDone.find(review => review.productId === product.id)?.id}
                                                images={product.images}
                                                name={product.name}
                                                price={product.price}
                                                rating={reviewsDone.find(review => review.productId === product.id)?.rating}
                                                comment={reviewsDone.find(review => review.productId === product.id)?.comment}
                                                date={order.order_date}
                                                handleRefresh={handleRefresh}
                                            />
                                        ) : (
                                            <ComprasSinComentarios
                                                key={product.id}
                                                userId={order.user.id}
                                                productId={product.id}
                                                images={product.images}
                                                name={product.name}
                                                price={product.price}
                                                date={order.order_date}
                                                handleRefresh={handleRefresh}
                                            />
                                      )})}
                                else return null
                            })}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductosAdquiridos;