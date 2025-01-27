import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardMovie from "../components/CardMovie";
import FormReview from "../components/FormReview";

const apiUrl = import.meta.env.VITE_API_URL;

function Movie() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        getDetails(id);
    }, [id]);

    function getDetails(id) {
        axios
            .get(apiUrl + "/movies/" + id)
            .then((res) => {
                console.log(res.data);
                setMovieDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finally");
            })
    }

    function handleAddReview(newReview) {
        const updateMovie = {
            ...movieDetails,
            reviews: [...movieDetails.reviews, newReview]
        };
        setMovieDetails(updateMovie);
    }

    function reviews() {
        if (movieDetails?.reviews && movieDetails.reviews.length > 0) {
            return movieDetails.reviews.map((review) => (
                <div className="col-12 p-2 m-3 border" key={review.id}>
                    <div><strong>Name:</strong> {review.name}</div>
                    <div><strong>Review:</strong> {review.text}</div>
                    <div><strong>Vote:</strong> {review.vote}</div>
                </div>
            ));
        }
        return <div>No reviews available</div>
    }

    return (
        <>
            <section className="d-flex flex-row justify-content-around">
                <div>
                    <h1 className="p-3">Movie con id {id}</h1>
                    <CardMovie
                        movie={movieDetails}
                    />
                </div>
                <div>
                    <h1 className="p-3">Reviews:</h1>
                    <div>
                        <div>{reviews()}</div>
                    </div>
                </div>
            </section>
            <section className="container-fluid py-4">
                <FormReview onAddReview={handleAddReview} />
            </section>
        </>
    );
}

export default Movie;