import StarRating from "./StarRating";
import { ImBin } from "react-icons/im";

function Reviews({ movieDetails }) {
    if (!movieDetails?.reviews || movieDetails.reviews.length === 0) {
        return <div>No reviews available</div>;
    }

    return movieDetails.reviews.map((review) => (
        <div className="col-12 p-2 my-2 border" key={review.id}>
            <div><strong>Name:</strong> {review.name}</div>
            <div><strong>Review:</strong> {review.text}</div>
            <div className="d-flex"><strong className="pe-2">Rating:</strong><StarRating vote={review.vote} /></div>
        </div>
    ));
}
//<div><strong>Vote:</strong> {review.vote}</div>
export default Reviews;