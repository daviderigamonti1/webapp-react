import { Link } from "react-router-dom";

function CardMovie({ movie }) {
    if (!movie) {
        return <div>Loading...</div>
    }
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={movie.image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.abstract}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                    Dettagli
                </Link>
            </div>
        </div>
    )
}

export default CardMovie;