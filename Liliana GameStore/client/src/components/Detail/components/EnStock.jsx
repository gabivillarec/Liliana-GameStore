


const EnStock = ({reviews , detail}) =>{
    
    const totalRating = reviews?.reduce((total, review) => total + review.rating, 0);
    const promedioRating = totalRating / reviews.length;
    const fullStars = Math.floor(promedioRating);
    const hasHalfStar = promedioRating - fullStars >= 0.5;
    
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
        <div className="d-flex flex-row my-3">
            <div className="text-warning mb-1 me-2">
                {fullStarsElements}
                {halfStarElement}
                {emptyStarsElements}
                {/*si es NaN no se renderiza*/}
                {isNaN(promedioRating) ? null : <span className="ms-1">{promedioRating.toFixed(2)}</span>}
            </div> {detail.stock === 0
            ? (<span className="text-danger ms-2">SIN STOCK ⛔</span>)
            : detail.stock > 0 && detail.stock <= 5
            ? (<span className="text-warning ms-2">BAJO STOCK ⚠️</span>)
            : (<span className="text-success ms-2">EN STOCK ✅</span>)}
        </div>
    )
}

export default EnStock