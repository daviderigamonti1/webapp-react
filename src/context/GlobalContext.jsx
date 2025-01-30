import { useContext, createContext, useState } from "react";
import axios from "axios";

import Loader from "../components/Loader";

const GlobalContext = createContext()
const apiUrl = import.meta.env.VITE_API_URL;

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [numPages, setNumPages] = useState(0);
    const [page, setPage] = useState(1);

    function getData() {
        setIsLoading(true);
        axios
            .get(apiUrl + "/movies", { params: { page } })
            .then((res) => {
                setNumPages(Math.ceil(res.data.count / 2));
                setMovies(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <GlobalContext.Provider value={{ movies, setMovies, getData, isLoading, page, setPage, numPages, setNumPages }}>
            {children}
        </GlobalContext.Provider>
    )
};

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };