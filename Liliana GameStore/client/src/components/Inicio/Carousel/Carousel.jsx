import React, { useEffect, useState } from "react";
// import ImgCarousel from "./ImgCarousel";
import styles from './Carousel.module.css'

const arrayFran = [
    'https://i.postimg.cc/fT3MRSHr/10.png',
    'https://i.postimg.cc/j5ssx89H/2.png',
    'https://i.postimg.cc/25dkfpHj/3.png',
    'https://i.postimg.cc/CMrF0s48/4.png',
    'https://i.postimg.cc/T11fmKTh/5.png',
    'https://i.postimg.cc/TwCTpVMZ/6.png',
    'https://i.postimg.cc/1XdPKyzB/7.png',
    'https://i.postimg.cc/DwXfB4LX/8.png',
    'https://i.postimg.cc/GpnLN3xS/9.png'
];

const Carousel = () => {

    return (
        <section>
            <div id="carouselExampleAutoplaying" className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src='https://i.postimg.cc/mkpZ6QmQ/1.png' className="d-block w-100" alt="bannerUno"/>
                    </div>
                    {arrayFran?.map((image, index) => (
                        <div key={index} className="carousel-item">
                            <img src={image} className={styles.img} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Carousel;
