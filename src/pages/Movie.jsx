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

    /*function handleAddReview(newReview) {
        const updateMovie = {
            ...movieDetails,
            reviews: [...movieDetails.reviews, newReview]
        };
        setMovieDetails(updateMovie);
    }
    */

    return (
        <>
            <section className="container d-flex flex-row justify-content-around">
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
                <div className="d-flex flex-column">
                    <h1 className="ps-2">Reviews:</h1>
                    <div>
                        <Reviews movieDetails={movieDetails} />
                    </div>
                </div>
            </section >
            <section className="container-fluid py-4">
                <FormReview id={id} newReviews={getDetails} />
            </section>
        </>
    );
}

export default Movie;