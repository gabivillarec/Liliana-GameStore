import axios from "axios"
import { useEffect, useState } from "react"
import { URL } from "../../../main"


const AsideDetail = ({id}) =>{
    const [imagenes, setImagenes] = useState([])

    useEffect(()=>{
        try {
            axios.get(`${URL}products/${id}`).then(response => {
                setImagenes(response.data.images)
                console.log(response.data.images)
            })
        } catch (error) {
            console.log(error);
        }
    },[])

    return(
        <aside className="col-lg-6">
            <div className="border bg-light rounded-4 mb-3 d-flex justify-content-center">
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        
                        {
                                imagenes?.map((imagen, index) => {
                                    if(index === 0){
                                        return(<div key={index} className="carousel-item active">
                                            <img src={imagen} className="d-block w-100 rounded-4" alt="..."/>
                                        </div>)
                                    }else{
                                        return(
                                            <div key={index} className="carousel-item">
                                                <img src={imagen} className="d-block w-100 rounded-4" alt={imagen} />
                                            </div>
                                        )
                                    }
                                    })
                            
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="btn btn-dark" aria-hidden="true"><i className="bi bi-arrow-left-square"></i></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="btn btn-dark" aria-hidden="true"><i className="bi bi-arrow-right-square"></i></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>
        </aside>
    )
}

export default AsideDetail