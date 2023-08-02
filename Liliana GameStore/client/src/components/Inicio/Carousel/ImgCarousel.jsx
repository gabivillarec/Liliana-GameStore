import styles from './Carousel.module.css'

const ImgCarousel = ( {img , name}) => {
    
    return(
        <div className="carousel-item">
            <img className={styles.img} src={img} alt={name} />
        </div>
    )
}

export default ImgCarousel;