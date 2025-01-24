import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalContext";

import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/home" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/movies" Component={Movies}>
                <Route path=":id" Component={Movie} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App;
