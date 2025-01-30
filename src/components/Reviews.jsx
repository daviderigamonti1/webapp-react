import StarRating from "./StarRating";
import Bin from "./Bin";

function Reviews({ movieDetails, movieId, deleteReview }) {

    if (!movieDetails?.reviews || movieDetails.reviews.length === 0) {
        return <div>No reviews available</div>;
    }

    return (
        <div className="row g-3">
            {movieDetails.reviews.map((review) => (
                <div className="col-12 p-2 ml-2 border position-relative review-container" key={review.id}>
                    <Bin
                        movieId={movieId}
                        reviewId={review.id}
                        deleteReview={deleteReview}
                    />
                    <div>
                        <strong>Name:</strong>
                        <span className="px-2">{review.name}</span>
                    </div>
                    <div>
                        <strong>Review:</strong>
                        <span className="px-2">{review.text}</span>
                    </div>
                    <div className="d-flex">
                        <strong className="pe-2">Rating:</strong>
                        <StarRating vote={review.vote} />
                    </div>
                </div>
            ))}
        </div >
    )
}
//<div><strong>Vote:</strong> {review.vote}</div>
export default Reviews;