import { useState , useEffect } from "react";
import AdminItem from './AdminItem'



const TablaProduts = ({products}) => {


    console.log( 'estado')
    console.log(products, 'producto2')



    return(
        <tbody>
            {
                products.map((product , index)=> <AdminItem key={index} product={product} />)
            }
        </tbody>
    )
}

export default TablaProduts;