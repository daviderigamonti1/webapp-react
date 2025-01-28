import { Outlet } from "react-router-dom";
import { GlobalProvider, useGlobalContext } from "../context/GlobalContext";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function DefaultLayout() {
    const { isLoading } = useGlobalContext();
    return (
        <>
            <Header />
            {isLoading && <Loader />}
            <main className="container p-5">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout;