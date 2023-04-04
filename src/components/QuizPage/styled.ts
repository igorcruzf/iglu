import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const QuizPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ChosenLanguage = styled.div`
  > * {
    cursor: default;
  }
`;

export const QuizContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const QuizNumber = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
  color: #000000;
`;

export const History = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 1.2;
  text-align: justify;
  color: #000000;
  max-width: 1150px; /* Limit the width of the text container */
  width: 95%; /* Use percentage for width to allow it to grow/shrink with screen size */
  margin: 5% auto; /* Center the text container */
`;


export const Question = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  text-align: justify;
  margin-top: 40px;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 43px;
  }
`;

export const Answers = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: auto;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 40px;
`;

export const ArrowRight = styled(FontAwesomeIcon).attrs(() => ({
  "data-testid": "arrow-right",
}))`
  width: 50px;
  height: 50px;
  margin-left: auto;
  margin-right: 30px;
  cursor: pointer;

`;

export const ArrowLeft = styled(FontAwesomeIcon)`
  width: 50px;
  height: 50px;
  margin-right: auto;
  margin-left: 30px;
  color: black;
`;
