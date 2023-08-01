import ImgCarousel from "./ImgCarousel";

const arrayFran = [
    {
        id:20,
        name:'Sony PlayStation 5 825GB Standard color blanco y negro',
        price:'500000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_841787-MLA44484414455_012021-F.webp',
        descripcion:'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.'
    },
    {
        id:21,
        name:'Xbox One S 500GB',
        price:'260000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_827517-MLA40655732582_022020-F.webp',
        descripcion:'Con tu consola Xbox One tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.'
    },
    {
        id:22,
        name:'Meoria RAM Spectrix D50 8GB',
        price:'20000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_943975-MLA45769609804_042021-F.webp',
        descripcion:'Si notás que tu computadora tiene bajo rendimiento o que su capacidad no se adapta a tus necesidades de uso, es momento de renovar su memoria RAM. Aumentarás su productividad y podrás trabajar de manera rápida y en simultáneo con múltiples aplicaciones.'
    },
    {
        id:23,
        name:'AMD Ryzen 5 5600g',
        price:'100000',
        image:'https://http2.mlstatic.com/D_NQ_NP_2X_928642-MLA47847420037_102021-F.webp',
        descripcion:'Mejora tu experiencia de juego con el Procesador gamer AMD Ryzen 5 5600G, diseñado para brindarte un rendimiento excepcional en tus juegos favoritos. Con sus 6 núcleos y 12 hilos, este procesador te permitirá disfrutar de una multitarea fluida y eficiente. Gracias a su arquitectura x86-64 y litografía de 7 nm, obtendrás un rendimiento óptimo con un menor consumo de energía.'
    },
]

const Carousel = () => {
    

    return(
        <section>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-inner">
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