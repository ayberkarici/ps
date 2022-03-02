import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import "./scss/App.scss";
import Header from "./components/Header.js";
import BriefLanding from "./pages/BriefLanding";
import Movies from "./pages/Movies";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";

function App() {
    useEffect(() => {
        document.title = "Ayberk Arıcı | Personal Site";
    }, []);

    const [currLocation, setCurrLocaiton] = useState("/") ; 

    useEffect(() => {
        setCurrLocaiton(window.location.pathname);
    }, [window.location.pathname])


    const [windowPos, setWindowPos] = useState(true);

    const scrolled = () => {
        if (window.scrollY >= 50) {
            setWindowPos(false);
        } else {
            setWindowPos(true);
        }
    };

    window.addEventListener("scroll", scrolled);

    return (
        <Router>
            <div className="App">
                <Header windowPos={windowPos} />
                <Routes>
                    <Route
                        path="/"
                        element={<BriefLanding windowPos={windowPos} />}
                    />
                    <Route path="/movies" element={<Movies />}>
                        <Route  path=":id"  element={<MovieDetail />} />
                    </Route>
                </Routes>
                <Footer currLocation={currLocation} />
            </div>
        </Router>
    );
}

export default App;
