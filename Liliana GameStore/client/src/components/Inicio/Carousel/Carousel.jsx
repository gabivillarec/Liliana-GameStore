import React, { useEffect, useState } from "react";
// import ImgCarousel from "./ImgCarousel";
import styles from './Carousel.module.css'

const arrayFran = [
    'https://imagenes.compragamer.com/bannerPrincipal/DC_20230731112408_6DDt4vlp.jpg',
    'https://imagenes.compragamer.com/bannerPrincipal/DC_20230731172357_JkMiVg5i.jpg',
    'https://imagenes.compragamer.com/bannerPrincipal/DC_20230712095128_lNOtrnED.jpg',
    'https://imagenes.compragamer.com/bannerPrincipal/DC_20230712095030_OsXtp6Iz.jpg',
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % arrayFran.length);
        }, 7000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
                    {arrayFran.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                            <img src={image} className={styles.img} alt={`Image ${index}`} />
                        </div>
                    ))}
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
    );
}

export default Carousel;
