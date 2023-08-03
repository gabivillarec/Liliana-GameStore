import style from './Item.module.css'

const Item = ({product}) =>{
    let {image , name , price} = product
    return(
        <div className={style.item}>
            <img src={image} alt={name} />
            <h5>{name}</h5>
            <p>{price}</p>
        </div>
                
                
        
    )
}

export default Item