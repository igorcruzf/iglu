import React from 'react';
import  { Routes, Route } from "react-router-dom";
import './App.css';
import ChooseLanguagePage from "./components/ChooseLanguagePage/ChooseLanguagePage";

function App() {
  return (
   <div className="content">
    {/*<MenuButtons/>*/}
    <Routes>
      <Route path="/" element={<ChooseLanguagePage/>}/>
    </Routes>
  </div>
  );
}

export default App;
