import './QuizPage.css'
import React, {useEffect, useState} from "react";
import LanguageButton from "../LanguageButton/LanguageButton";
import QuizAnswer from "../QuizAnswer/QuizAnswer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from 'react-router-dom';
import {fetchQuizData, QuizData} from '../../services/chatGPTService';
import LoadingIcon from "../LoadingIcon/LoadingIcon";

export default function QuizPage() {

    const [quizData, setQuizData] = useState<QuizData | undefined>();
    const [disable, setDisable] = useState<boolean>();
    const [selectedAnswer, setSelectedAnswer] = useState<string>();
    const [quizNumber, setQuizNumber] = useState<number>(1);

    const location = useLocation();
    const {flagUrl, text} = location.state;

    useEffect(() => {
        const getQuizData = async () => {
            const quizData = await fetchQuizData({language: text});
            setQuizData(quizData);
        };

        getQuizData();
    }, [text, quizNumber]);

    if (!quizData) {
        return <LoadingIcon/>
    }

    const {history, question, correctAnswer, wrongAnswers} = quizData;
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

    return <div id={"quiz-page-container"}>
        <div id={"quiz-container"}>
            <div id={"chosen-language"}>
                <LanguageButton text={text} flagUrl={flagUrl} disable={true}/>
            </div>
            <div id={"quiz-number"}>
                {quizNumber}.
            </div>
            <div id={"history"}>
                {history}
            </div>
        </div>
        <div id={"question"}>
            {question}
        </div>
        <div id={"answers"}>
            {answers.map(answer => (
                <QuizAnswer key={answer} onClick={() => handleAnswer(answer)} text={answer} disable={disable}
                            selected={selectedAnswer === answer} correct={selectedAnswer === correctAnswer}/>
            ))}
        </div>
        <div id={"arrows"}>
            <Link to=".."><FontAwesomeIcon icon={faCircleArrowLeft} className={"arrow-left"}/></Link>
            <FontAwesomeIcon onClick={handleClick} icon={faCircleArrowRight} className={"arrow-right"}/>
        </div>
    </div>
}