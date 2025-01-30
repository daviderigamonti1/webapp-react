import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

import CardMovie from "../components/CardMovie";
import Pager from "../components/Pager";

function Movies() {
    const { getData, movies, numPages, page, setPage } = useGlobalContext();

    useEffect(() => {
        getData();
    }, [page]);

    function handleClick(numpage) {
        setPage(numpage);
    }

    if (movies.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <section className="container py-5 text-center d-flex flex-column justify-content-center">
            <h1 className="p-4">All Movies</h1>
            <div className="row gy-4 d-flex">
                {movies.map((movie) => (
                    <div className="col-12 col-md-4 col-lg-3 my-3" key={movie.id}>
                        <CardMovie movie={movie} />
                    </div>
                ))}
                <Pager
                    page={page}
                    numPages={numPages}
                    onChangePage={(numpage) => handleClick(numpage)}
                />
            </div>
        </section >
    )
}

export default Movies;