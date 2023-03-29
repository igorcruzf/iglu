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

    const handleClick = (flagUrl: string, text: string) => {
        navigate("/iglu/quiz", { state: { flagUrl, text } });
    };

    const languages = [
        { flagUrl: "images/flags/brazilflag.png", text: "Português (BR)" },
        { flagUrl: "images/flags/usaflag.png", text: "Inglês" },
        { flagUrl: "images/flags/spainflag.png", text: "Espanhol" },
        // { flagUrl: "images/flags/chinaflag.png", text: "Mandarim" },
        // { flagUrl: "images/flags/japanflag.png", text: "Japonês" },
        { flagUrl: "images/flags/franceflag.png", text: "Francês" },
        { flagUrl: "images/flags/germanyflag.png", text: "Alemão" },
    ];

    return (
        <ChooseLanguageContainer>
            <ChooseTextContainer>
                <div>Olá,</div>
                <div>Escolha um idioma para se desafiar:</div>
            </ChooseTextContainer>
            <ButtonsAndMapContainer>
                <LanguageButtonsContainer>
                    {languages.map(({ flagUrl, text }) => (
                        <LanguageButton
                            key={text}
                            onClick={() => handleClick(flagUrl, text)}
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
