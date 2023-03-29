import './ChooseLanguagePage.css'
import React from "react";
import LanguageButton from "../LanguageButton/LanguageButton";
import {useNavigate} from 'react-router-dom';

export default function ChooseLanguagePage() {

    const navigate = useNavigate();
    const handleClick = (flagUrl: string, text: string) => {
        navigate('/iglu/quiz', {state: {flagUrl, text}});
    };

    const languages = [
        {flagUrl: "images/flags/brazilflag.png", text: "Português (BR)"},
        {flagUrl: "images/flags/usaflag.png", text: "Inglês"},
        {flagUrl: "images/flags/spainflag.png", text: "Espanhol"},
        // { flagUrl: "images/flags/chinaflag.png", text: "Mandarim" },
        // { flagUrl: "images/flags/japanflag.png", text: "Japonês" },
        {flagUrl: "images/flags/franceflag.png", text: "Francês"},
        {flagUrl: "images/flags/germanyflag.png", text: "Alemão"}
    ];

    return <div id={"choose-language"}>
        <div id={"choose-text"}>
            <div>Olá,</div>
            <div>Escolha um idioma para se desafiar:</div>
        </div>
        <div id={"buttons-and-map"}>
            <div id={"language-buttons"}>
                {languages.map(({flagUrl, text}) => (
                    <LanguageButton
                        key={text}
                        onClick={() => handleClick(flagUrl, text)}
                        flagUrl={flagUrl}
                        text={text}
                    />
                ))}
            </div>
            <img src={`${process.env.PUBLIC_URL}/images/global_map.jpeg`} id={"global-map"} alt={"Global Map"}/>
        </div>

    </div>
}