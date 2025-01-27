import { useGlobalContext } from "../context/GlobalContext";
import CardMovie from "../components/CardMovie";

function Movies() {
    const { movies } = useGlobalContext();
    if (!movies) {
        return <div>Loading...</div>;
    }
    return (
        <section className="container">
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-12 col-md-4 col-lg-3 my-3" key={movie.id}>
                        <CardMovie movie={movie} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Movies;