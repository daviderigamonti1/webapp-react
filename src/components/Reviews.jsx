
function Reviews({ movieDetails }) {
    if (!movieDetails?.reviews || movieDetails.reviews.length === 0) {
        return <div>No reviews available</div>;
    }

    return movieDetails.reviews.map((review) => (
        <div className="col-12 p-2 m-3 border" key={review.id}>
            <div><strong>Name:</strong> {review.name}</div>
            <div><strong>Review:</strong> {review.text}</div>
            <div><strong>Vote:</strong> {review.vote}</div>
        </div>
    ));
}

export default Reviews;