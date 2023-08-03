import style from './Item.module.css'

const Item = ({product}) =>{
    let {image , name , price} = product
    return(
        <div className={style.item}>
            <img src={image} className={`object-fit-xxl-contain border rounded ${style.imageItem}`} alt={name} />
            <h5 className='text-center'>{name}</h5>
            <p>{price}</p>
        </div>
                
                
        
    )
}

export default Item