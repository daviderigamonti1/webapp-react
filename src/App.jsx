import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/movies" Component={Movies}>
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
