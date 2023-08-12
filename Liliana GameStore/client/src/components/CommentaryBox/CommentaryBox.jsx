import style from "./CommentaryBox.module.css";

const CommentaryBox = () => {
    
    let rating = 2.5
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    
    const fullStarsElements = [];
    for (let i = 0; i < fullStars; i++) {
      fullStarsElements.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    const halfStarElement = hasHalfStar ? (
      <i key={fullStars} className="bi bi-star-half"></i>
    ) : null;
    const emptyStarsElements = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars - fullStars - (hasHalfStar ? 1 : 0); i++) {
      emptyStarsElements.push(<i key={fullStars + (hasHalfStar ? 1 : 0) + i} className="bi bi-star"></i>);
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
    
                <div className="d-flex flex-start">
                    <img className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                    height="60" />
                    <div>
                    <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                    <div className="d-flex align-items-center mb-3 justify-content-between">
                        <p className="mb-0">March 07, 2021</p>
                        <a className="mb-1">
                                {fullStarsElements}
                                {halfStarElement}
                                {emptyStarsElements}
                        </a>                        
                    </div>
                    <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it.
                    </p>
                    </div>
                </div>
                </div>  
                <hr className="my-0" />
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default CommentaryBox;