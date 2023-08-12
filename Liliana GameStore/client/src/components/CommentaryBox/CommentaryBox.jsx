import { useState } from "react";
import style from "./CommentaryBox.module.css";
import axios from "axios";

const CommentaryBox = ({ reviews }) => {

  const fullStars = (rating) => {
    const fullStarsElements = [];
    for (let i = 0; i < rating; i++) {
      fullStarsElements.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return fullStarsElements
  }
  
  const emptyStars = (rating) => {
    const emptyStarsElements = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars - rating; i++) {
      emptyStarsElements.push(<i key={rating + i} className="bi bi-star"></i>);
    }
    return emptyStarsElements
  }

  
  return (
    <section>
        <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10">
            <div className={style.commentaryCard} >
                <div className="card-body p-4">
                  <h4 className="mb-0">Comentarios</h4>
                  <p className="fw-light mb-4 pb-2"></p>
                  {reviews?.map(review => {
                    return (
                      <div>
                        <div className="d-flex flex-row">
                          <img className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                          height="60" />
                          <div style={{width:"100%"}}>
                            <h6 className="fw-bold mb-1">pepe</h6>
                            <div className="d-flex align-items-center mb-3 justify-content-between">
                              <p className="mb-0">March 07, 2021</p>
                              <a className="mb-1">
                                  {fullStars(review.rating)}
                                  {emptyStars(review.rating)}
                              </a>                        
                            </div>
                            <p className="p-3 border border-1 rounded border-info">
                              {review.comment}
                            </p>
                          </div>
                        </div>
                          <hr class="border border-primary border-3 opacity-75"/>
                      </div>
                    )
                  })}
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default CommentaryBox;