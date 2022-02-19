import { useState, useEffect } from "react";
import "normalize.css";
import "./scss/App.scss";
import Header from "./components/Header.js";
import BriefLanding from "./components/BriefLanding";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        document.title = "Ayberk Arıcı | Personal Site"
     }, []);
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
        <div className="App">
            <Header windowPos={windowPos} />
            <BriefLanding windowPos={windowPos} />
            <MainSection />
            <Footer />
        </div>
    );
}

export default App;
