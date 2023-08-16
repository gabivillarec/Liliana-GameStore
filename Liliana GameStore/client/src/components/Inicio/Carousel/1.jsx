import ImgCarousel from "./ImgCarousel";
import styles from './Carousel.module.css'

const arrayFran = [
    {
        name:'logitech auricular',
        image:'https://imagenes.compragamer.com/bannerPrincipal/DC_20230731172357_JkMiVg5i.jpg',
    },
    {
        name:'AMD Ryzen',
        image:'https://imagenes.compragamer.com/bannerPrincipal/DC_20230712095128_lNOtrnED.jpg',
    },
    {
        name:'AMD Placa Video',
        image:'https://imagenes.compragamer.com/bannerPrincipal/DC_20230712095030_OsXtp6Iz.jpg',
    },
]

const Carousel = () => {
    

    return(
        <section>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://imagenes.compragamer.com/bannerPrincipal/DC_20230731112408_6DDt4vlp.jpg' className={styles.img} alt="Hyper auricular"/>
                    </div>
                    {
                        arrayFran.map((produc , index) => <ImgCarousel key={index} name={produc.name} img={produc.image} />)
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default Carousel;