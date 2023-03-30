import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 290px;
  height: 56px;
  cursor: pointer;
  background: #ECECEC;
  border-radius: 10px;
  border-color: #ECECEC;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.25));
  margin: 0 auto;
  &:hover:not([disabled]) {
    background: #CECECE;
  }
`;

export const LanguageText = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const FlagIcon = styled.img`
  margin-right: 5px;
  margin-left: 20px;
  height: 20px;
  width: 30px;
`;