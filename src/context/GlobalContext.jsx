import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";

const GlobalContext = createContext()
const apiUrl = import.meta.env.VITE_API_URL;

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        setIsLoading(true);
        axios
            .get(apiUrl + "/movies")
            .then((res) => {
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
        <GlobalContext.Provider value={{ movies, setMovies, getData, isLoading }}>
            {children}
        </GlobalContext.Provider>
    )
};

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };