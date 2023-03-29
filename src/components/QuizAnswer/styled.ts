import styled, {keyframes} from "styled-components";

const shake = keyframes`
  10%, 90% {
    transform: translate(-3px, 0);
  }

  20%, 80% {
    transform: translate(3px, 0);
  }

  30%, 50%, 70% {
    transform: translate(-5px, 0);
  }

  40%, 60% {
    transform: translate(5px, 0);
  }
`;

export const AnswerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1249px;
  height: 56px;
  background: #ececec;
  border-radius: 10px;
  border-color: #ececec;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25));
  text-align: center;
  transition: all 0.3s ease-in-out;

  &:hover:not([disabled]) {
    background: #cecece;
    cursor: pointer;
  }

  &.correct {
    background: #b9e2d3;
  }

  &.wrong {
    background: #ff9595;
    animation: ${shake} 0.5s ease-in-out;
  }
`;

export const AnswerText = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;