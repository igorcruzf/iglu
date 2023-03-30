import React from "react";
import LanguageButton from "../LanguageButton/LanguageButton";
import {useNavigate} from "react-router-dom";
import {
    ButtonsAndMapContainer,
    ChooseLanguageContainer,
    ChooseTextContainer,
    GlobalMapImage,
    LanguageButtonsContainer
} from "./styled";

export default function ChooseLanguagePage() {
    const navigate = useNavigate();

    const languages = [
        { flagUrl: "images/flags/brazilflag.png", text: "Português (BR)", language: "portuguese" },
        { flagUrl: "images/flags/usaflag.png", text: "Inglês", language: "english"},
        { flagUrl: "images/flags/spainflag.png", text: "Espanhol", language: "spanish" },
        { flagUrl: "images/flags/chinaflag.png", text: "Mandarim", language: "chinese" },
        { flagUrl: "images/flags/japanflag.png", text: "Japonês", language: "japanese" },
        { flagUrl: "images/flags/franceflag.png", text: "Francês", language: "french" },
        { flagUrl: "images/flags/germanyflag.png", text: "Alemão", language: "german" },
    ];

    const handleClick = (flagUrl: string, text: string, language: string) => {
        navigate("/iglu/quiz", { state: { flagUrl, text, language } });
    };

    return (
        <ChooseLanguageContainer>
            <ChooseTextContainer>
                <div>Olá,</div>
                <div>Escolha um idioma para se desafiar:</div>
            </ChooseTextContainer>
            <ButtonsAndMapContainer>
                <LanguageButtonsContainer>
                    {languages.map(({ flagUrl, text, language }) => (
                        <LanguageButton
                            key={text}
                            onClick={() => handleClick(flagUrl, text, language)}
                            flagUrl={flagUrl}
                            text={text}
                        />
                    ))}
                </LanguageButtonsContainer>
                <GlobalMapImage
                    src={`${process.env.PUBLIC_URL}/images/global_map.jpeg`}
                    alt={"Global Map"}
                />
            </ButtonsAndMapContainer>
        </ChooseLanguageContainer>
    );
}
