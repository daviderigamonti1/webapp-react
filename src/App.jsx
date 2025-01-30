import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalContext";

import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/contact" Component={Contact} />
              <Route path="/movies">
                <Route index Component={Movies} />
                <Route path=":id" Component={Movie} />
              </Route>
              <Route path="*" Component={NotFound} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App;