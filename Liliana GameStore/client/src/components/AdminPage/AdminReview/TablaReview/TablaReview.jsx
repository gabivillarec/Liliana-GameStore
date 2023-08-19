import { useEffect,  } from 'react';
import ReviewItem from './ReviewItem';
import axios from "axios";
import { URL } from '../../../../main';


const TablaReview = ({review , deleteTrigger ,setDeleteTrigger}) => {
    
    const handlerDelete = async (checkbox, id) => {
        if (checkbox) {
            try {
                await axios.delete(`${URL}review/${id}`);
                setDeleteTrigger(!deleteTrigger); 
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        } else {
            alert(`El checkbox debe estar en true para poder eliminar un producto`);
        }}

    useEffect(()=> {

    },[handlerDelete ])
    
    return(
        <tbody>
            {
                review.map((review , index)=> <ReviewItem key={index} review={review} handlerDelete={handlerDelete}/>)
            }
        </tbody>
    )
}

export default TablaReview