import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CardMovie from "../components/CardMovie";
import Reviews from "../components/Reviews";
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
                setMovieDetails(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finally");
            })
    }

    function deleteReview(reviewId) {
        if (window.confirm("Sei sicuro di voler eliminare questa recensione?")) {
            axios
                .delete(`${apiUrl}/movies/${id}/reviews/${reviewId}`)
                .then(() => {
                    setMovieDetails((prevMovieDetails) => {
                        const updateReviews = prevMovieDetails.reviews.filter(review => review.id !== reviewId);
                        return {
                            ...prevMovieDetails,
                            reviews: updateReviews
                        };
                    })
                    console.log("Recensione rimossa");
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    function newReviews(id) {
        getDetails(id);
    }

    return (
        <>
            <section className="container">
                <div>
                    <h1 className="pb-3">Details</h1>
                    {movieDetails ? (
                        <CardMovie
                            movie={movieDetails}
                        />
                    ) : (
                        <div>Loading movie details...</div>
                    )}
                </div>
                <div className="d-flex flex-column border p-3 mt-5">
                    <h2 className="py-2">Reviews:</h2>
                    <Reviews
                        movieDetails={movieDetails}
                        movieId={id}
                        deleteReview={deleteReview}
                    />
                </div>
            </section >
            <section className="container-fluid py-4">
                <FormReview id={id} newReviews={newReviews} />
            </section>
        </>
    );
}

export default Movie;