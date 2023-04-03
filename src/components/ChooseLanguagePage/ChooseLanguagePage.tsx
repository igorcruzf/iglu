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

    const handleClick = (flagUrl: string, text: string, value: string) => {
        navigate("/iglu/quiz", { state: { flagUrl, text, value } });
    };

    const languages = [
        { flagUrl: "images/flags/brazilflag.png", text: "Português (BR)", value: "portuguese" },
        { flagUrl: "images/flags/usaflag.png", text: "Inglês", value: "english" },
        { flagUrl: "images/flags/spainflag.png", text: "Espanhol", value: "spanish" },
        // { flagUrl: "images/flags/chinaflag.png", text: "Mandarim", value: "chinese" },
        // { flagUrl: "images/flags/japanflag.png", text: "Japonês", value: "japanese" },
        { flagUrl: "images/flags/franceflag.png", text: "Francês", value: "french" },
        { flagUrl: "images/flags/germanyflag.png", text: "Alemão", value: "german" },
    ];

    return (
        <ChooseLanguageContainer>
            <ChooseTextContainer>
                <div>Olá,</div>
                <div>Escolha um idioma para se desafiar:</div>
            </ChooseTextContainer>
            <ButtonsAndMapContainer>
                <LanguageButtonsContainer>
                    {languages.map(({ flagUrl, text, value }) => (
                        <LanguageButton
                            key={value}
                            onClick={() => handleClick(flagUrl, text, value)}
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
