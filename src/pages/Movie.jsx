import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardMovie from "../components/CardMovie";

const apiUrl = import.meta.env.VITE_API_URL;

function Movie() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState([null])

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

    function reviews() {
        if (movieDetails.reviews.length > 0) {
            return movieDetails.reviews.map((review) => (
                <div className="col-12" key={review.id}>
                    <p>{review.text}</p>
                </div>
            ));
        }
        return <div>No reviews available</div>
    }

    return (
        <section>
            <h1 className="p-3">Movie con id {id}</h1>
            <CardMovie
                movie={movieDetails}
            />
        </section>
    );
}

export default Movie;