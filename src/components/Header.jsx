import { useState } from "react";
import { NavLink } from "react-router-dom";
import { PiFilmReelFill } from "react-icons/pi";

function Header() {
    const [show, setShow] = useState(false);

    function toggleNav() {
        show ? setShow(false) : setShow(true);
    }

    //function handleSearch(e) {
    //e.preventDefault()
    //}

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div id="logo"><PiFilmReelFill /></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        onClick={toggleNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ps-4">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">
                                    Lista movies
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        {/*<form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" name="search" onChange={handleiInput} placeholder="Search" aria-label="Search">
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </input></form>*/}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;