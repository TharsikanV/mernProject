export default function ProductReview(reviews) {
    return (
        <div className="reviews w-75">
            <h3>Other's Reviews:</h3>
            <hr />
            {}
            <div className="review-card my-3">
                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                <p className="review_user">by Tamizharasan</p>
                <p className="review_comment">Best Product</p>

                <hr />
            </div>
        </div>
    )
}