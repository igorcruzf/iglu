import React from "react";
import {AnswerButton, AnswerText} from "./styled";

interface AnswerProps {
    onClick: () => void;
    text: string;
    disable?: boolean;
    selected?: boolean;
    correct?: boolean;
}

const QuizAnswer: React.FC<AnswerProps> =
    ({
       onClick,
       text,
       disable = false,
       selected = false,
       correct = false,
    }) => {
    const className = `${selected ? (correct ? "correct" : "wrong") : ""}`;

    return (
        <AnswerButton className={className} onClick={onClick} disabled={disable}>
            <AnswerText>{text}</AnswerText>
        </AnswerButton>
    );
};

export default QuizAnswer;



