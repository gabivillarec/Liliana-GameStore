
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


initMercadoPago('APP_USR-ff96fe80-6866-4888-847e-c69250754d38');
import { useEffect } from 'react';

const MercadoPago = ({preferenceId}) =>{
useEffect(()=>{

},[preferenceId])

    return(
        <div className='container bg-dark' id="wallet_container">
            <Wallet initialization={{ preferenceId: preferenceId,redirectMode: 'modal'}} />
        </div>

    )
}

export default MercadoPago;