import React, { useEffect, useState } from "react";
// import ImgCarousel from "./ImgCarousel";
import styles from './Carousel.module.css'

const arrayFran = [
    'https://imagenes.compragamer.com/bannerPrincipal/DC_20230731172357_JkMiVg5i.jpg',
    'https://imagenes.compragamer.com/bannerPrincipal/DC_20230712095128_lNOtrnED.jpg',
    'https://imagenes.compragamer.com/bannerPrincipal/DC_20230712095030_OsXtp6Iz.jpg',
];

const Carousel = () => {

    return (
        <section>
            <div id="carouselExampleAutoplaying" className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://imagenes.compragamer.com/bannerPrincipal/DC_20230731112408_6DDt4vlp.jpg' className="d-block w-100" alt="bannerUno"/>
                    </div>
                    {arrayFran?.map((image, index) => (
                        <div key={index} className="carousel-item">
                            <img src={image} className={styles.img} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Carousel;
