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
    const [quizDataList, setQuizDataList] = useState<QuizData[]>();
    const [quizDataIndex, setQuizDataIndex] = useState<number>(0);
    const [disable, setDisable] = useState<boolean>();
    const [selectedAnswer, setSelectedAnswer] = useState<string>();
    const [quizNumber, setQuizNumber] = useState<number>(1);
    const [reload, setReload] = useState<boolean>(false);

    const location = useLocation();
    const {flagUrl, text, value} = location.state;

    useEffect(() => {
        const getQuizData = async () => {
            const newQuizDataList = await fetchQuizData({language: value});
            console.log(newQuizDataList);
            if (quizDataList) {
                setQuizDataList([...quizDataList, ...newQuizDataList])
            } else {
                setQuizDataList([...newQuizDataList])
                setQuizData(newQuizDataList[0]);
            }
        };

        getQuizData();
        setReload(false)
    }, [text, reload]);

    if (!quizData) {
        if (quizDataList && quizDataList?.length != 0 && quizDataIndex !== quizDataList.length - 1) {
            setQuizData(quizDataList[quizDataIndex + 1])
            setQuizDataIndex(1 + quizDataIndex)
            return <LoadingIcon/>
        } else {
            return <LoadingIcon/>
        }
    }

    const {history, question, correctAnswer, answers} = quizData;

    const handleAnswer = (answer: string) => {
        setDisable(true)
        setSelectedAnswer(answer)
    }
    const handleClick = () => {
        if(disable) {
            if (quizDataList) {
                if (quizDataIndex === quizDataList?.length - 1) {
                    setQuizData(undefined)
                } else {
                    if (quizDataIndex === quizDataList?.length - 2) {
                        setReload(true)
                    }
                    setQuizData(quizDataList[quizDataIndex + 1])
                    setQuizDataIndex(1 + quizDataIndex)
                }
            }
            setQuizNumber(1 + quizNumber)
            setDisable(false)
            setSelectedAnswer("")
        }
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