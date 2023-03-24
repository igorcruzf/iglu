import './ChooseLanguagePage.css'
import React from "react";
import LanguageButton from "../LanguageButton/LanguageButton";

export default function ChooseLanguagePage() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return <div id={"chooseLanguage"}>
        <div id={"chooseText"}>
            <div>Olá,</div>
            <div>Escolha um idioma para se desafiar:</div>
        </div>
        <div id={"language-buttons"}>
            <LanguageButton onClick={handleClick} flagUrl={"images/flags/brazilflag.png"} text="Português (BR)" />
            <LanguageButton onClick={handleClick} flagUrl={"images/flags/usaflag.png"} text="Inglês" />
            <LanguageButton onClick={handleClick} flagUrl={"images/flags/spainflag.png"} text="Espanhol" />
            <LanguageButton onClick={handleClick} flagUrl={"images/flags/chinaflag.png"} text="Mandarim" />
            <LanguageButton onClick={handleClick} flagUrl={"images/flags/japanflag.png"} text="Japonês" />
            <LanguageButton onClick={handleClick} flagUrl={"images/flags/franceflag.png"} text="Francês" />
            <LanguageButton onClick={handleClick} flagUrl={"images/flags/germanyflag.png"} text="Alemão" />
        </div>
    </div>
}