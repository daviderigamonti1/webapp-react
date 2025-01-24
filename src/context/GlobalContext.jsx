import { useContext, createContext, useState } from "react";
import axios from "axios";

const GlobalContext = createContext()
const apiUrl = import.meta.env.VITE_API_URL;

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    function getData() {
        axios
            .get(apiUrl + "/api/movies")
            .then((res) => {
                console.log(res);
                setMovies(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finally");
            })
    }

    return (
        <GlobalContext.Provider value={{ movies, setMovies, getData }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };