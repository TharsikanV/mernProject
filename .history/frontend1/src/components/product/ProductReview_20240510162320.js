export default function ProductReview(reviews) {
    return (
        <div className="reviews w-75">
            <h3>Other's Reviews:</h3>
            <hr />
            {reviews && reviews.map(review=>(

            ))}
          
        </div>
    )
}