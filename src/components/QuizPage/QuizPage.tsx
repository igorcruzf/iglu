import LanguageButton from "../LanguageButton/LanguageButton";
import './QuizPage.css'
import QuizAnswer from "../QuizAnswer/QuizAnswer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link } from 'react-router-dom';
import {useEffect, useState} from "react";

import { fetchQuizData, QuizData } from '../../services/chatGPTService';
export default function QuizPage(){

    const [quizData, setQuizData] = useState<QuizData>();
    const [disable, setDisable] = useState<boolean>();
    const [selectedAnswer, setSelectedAnswer] = useState<string>();
    const location = useLocation();
    const { flagUrl, text } = location.state;

    useEffect(() => {
        const getQuizData = async () => {
            const quizData = await fetchQuizData({ language: text });
            setQuizData(quizData);
        };

        getQuizData();
    }, [text]);

    if (!quizData) {
        return <div>Loading quiz data...</div>;
    }

    const { history, question, correctAnswer, wrongAnswers } = quizData;
    const answers = [correctAnswer, ...wrongAnswers];

    const handleAnswer = (answer: string) => {
        setDisable(true)
        setSelectedAnswer(answer)
    }

    return <div id={"quiz-page-container"}>
        <div id={"quiz-container"}>
            <div id={"chosen-language"}>
                <LanguageButton onClick={() => {}} text={text} flagUrl={flagUrl} disable={true}/>
            </div>
            <div id={"quiz-number"}>
                1.
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
                <QuizAnswer key={answer} onClick={() => handleAnswer(answer)} text={answer} disable={disable} selected={selectedAnswer === answer} correct={selectedAnswer === correctAnswer}/>
            ))}
        </div>
        <div id={"arrows"}>
            <Link to=".."><FontAwesomeIcon icon={faCircleArrowLeft} className={"arrow-left"} /></Link>
            <FontAwesomeIcon icon={faCircleArrowRight} className={"arrow-right"}/>
        </div>
    </div>
}