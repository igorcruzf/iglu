import React from 'react';
import  { Routes, Route } from "react-router-dom";
import './App.css';
import ChooseLanguagePage from "./components/ChooseLanguagePage/ChooseLanguagePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <div className="content">
    <Header/>
     <div id={"main"}>
       <Routes>
         <Route path="/" element={<ChooseLanguagePage/>}/>
       </Routes>
     </div>
    <Footer/>
   </div>
  );
}

export default App;
