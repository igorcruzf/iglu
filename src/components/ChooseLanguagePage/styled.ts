import styled from "styled-components";

export const ChooseLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 50px;
  margin-left: 10%;
  padding-bottom: 100px;

  @media (max-width: 600px){
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;

export const ChooseTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: left;
  

  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;

  color: #000000;

  @media (max-width: 600px){
    width: inherit;
    font-size: 20px;
    align-items: flex-start;
    align-content: center;
    line-height: 30px;
    margin-left: 40px;

    & > * {
      width: auto;
    }
  }
`;

export const LanguageButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 200px;

  @media (max-width: 600px){
    margin-left: 0;
  }
`;

export const ButtonsAndMapContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  @media (max-width: 600px){
  }
`;

export const GlobalMapImage = styled.img`
  margin-top: 50px;
  margin-left: 200px;
  width: 862px;
  height: 475px;

  @media (max-width: 600px){
    display: none;
  }
`;