import "./assets/scss/App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPassEmailPage from "./pages/ForgotPassEmailPage";
import NewPassPage from "./pages/NewPassPage";
import MathEnginePage from "./pages/MathEnginePage";
import UnivSelectionPage from "./pages/UnivSelectionPage";
import DepartmentSelectionPage from "./pages/DepartmentSelectionPage";
import ActiveHomeworksPage from "./pages/ActiveHomeworksPage";
import SectionItemsPage from "./pages/SectionItemsPage";
import SectionDetailsPage from "./pages/SectionDetailsPage";
import Question from "./pages/QuestionPage";
import Profile from "./pages/ProfilePage";
import ProfileSettings from "./pages/ProfileSettings";

function App() {
    const notAllowedPaths = [
        "/login",
        "/register",
        "/recovery",
        "/email-support",
        "/new-password"
    ];

    return (
        <BrowserRouter>
            <div className="App">
                <Header
                    pathName={window.location.pathname}
                    pathList={notAllowedPaths}
                />
                <Routes>
                    <Route path="/" exact element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recovery" element={<ForgotPasswordPage />} />
                    <Route path="/email-support" element={<ForgotPassEmailPage />} />
                    <Route path="/new-password" element={<NewPassPage />} />
                    <Route path="/math-engine" element={<MathEnginePage />} />
                    <Route path="/university-selection" element={<UnivSelectionPage />} />
                    <Route path="/department-selection" element={<DepartmentSelectionPage />} />
                    <Route path="/active-homeworks" element={<ActiveHomeworksPage />} />
                    <Route path="/sections/:id" element={<SectionItemsPage />} />
                    <Route path="/section-details/:id" element={<SectionDetailsPage />} />
                    <Route path="/question/:id" element={<Question />} /> 
                    <Route path="/profile/:id" element={<Profile />} /> 
                    <Route path="/profile/settings" element={<ProfileSettings />} /> 

                </Routes>
                <Footer
                    pathName={window.location.pathname}
                    pathList={notAllowedPaths}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
