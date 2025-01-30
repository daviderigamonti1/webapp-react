import { Link } from "react-router-dom";
import { FiFilm } from 'react-icons/fi';

function Home() {
    return (
        <section id="home" className="vh-100">
            <Link to="/movies">
                <div className="icon-container text-center">
                    <FiFilm size={100} />
                </div>
            </Link>
        </section >
    )
}

export default Home;