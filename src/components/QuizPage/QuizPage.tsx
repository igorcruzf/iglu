import React, {useEffect, useState} from "react";
import LanguageButton from "../LanguageButton/LanguageButton";
import QuizAnswer from "../QuizAnswer/QuizAnswer";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from 'react-router-dom';
import {fetchQuizData, QuizData} from '../../services/chatGPTService';
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import {
    Answers,
    ArrowLeft,
    ArrowRight,
    Arrows,
    ChosenLanguage,
    History,
    Question,
    QuizContainer,
    QuizNumber,
    QuizPageContainer
} from "./styled";

export default function QuizPage() {

    const [quizData, setQuizData] = useState<QuizData | undefined>();
    const [disable, setDisable] = useState<boolean>();
    const [selectedAnswer, setSelectedAnswer] = useState<string>();
    const [quizNumber, setQuizNumber] = useState<number>(1);

    const location = useLocation();
    const { flagUrl, text } = location.state;

    useEffect(() => {
        const getQuizData = async () => {
            const quizData = await fetchQuizData({ language: text });
            setQuizData(quizData);
        };

        getQuizData();
    }, [text, quizNumber]);

    if (!quizData) {
        return <LoadingIcon />
    }

    const { history, question, correctAnswer, wrongAnswers } = quizData;
    const answers = [correctAnswer, ...wrongAnswers];

    const handleAnswer = (answer: string) => {
        setDisable(true)
        setSelectedAnswer(answer)
    }

    const handleClick = () => {
        setQuizNumber(1 + quizNumber)
        setDisable(false)
        setSelectedAnswer("")
        setQuizData(undefined)
    }

    return <QuizPageContainer>
        <QuizContainer>
            <ChosenLanguage>
                <LanguageButton text={text} flagUrl={flagUrl} disable={true}/>
            </ChosenLanguage>
            <QuizNumber>
                {quizNumber}.
            </QuizNumber>
            <History>
                {history}
            </History>
        </QuizContainer>
        <Question>
            {question}
        </Question>
        <Answers>
            {answers.map(answer => (
                <QuizAnswer key={answer} onClick={() => handleAnswer(answer)} text={answer} disable={disable}
                            selected={selectedAnswer === answer} correct={selectedAnswer === correctAnswer}/>
            ))}
        </Answers>
        <Arrows>
            <Link to=".."><ArrowLeft icon={faCircleArrowLeft}/></Link>
            <ArrowRight onClick={handleClick} icon={faCircleArrowRight}/>
        </Arrows>
    </QuizPageContainer>
}