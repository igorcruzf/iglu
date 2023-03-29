import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import ChooseLanguagePage from "./components/ChooseLanguagePage/ChooseLanguagePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import QuizPage from "./components/QuizPage/QuizPage";

function App() {
    return (
        <div className="content">
            <Header/>
            <div id={"main"}>
                <Routes>
                    <Route path="/iglu/" element={<ChooseLanguagePage/>}/>
                    <Route path="/" element={<ChooseLanguagePage/>}/>
                    <Route path="/iglu/quiz" element={<QuizPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
