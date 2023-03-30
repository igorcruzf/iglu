import styled from "styled-components";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const HeaderLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 40px;
`;

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 73px;
  background: linear-gradient(90deg, #D1E0EF 1.38%, #A3D8DE 20.03%, #FED6DF 37.51%, #B8E2D2 53.82%, #C7AFCC 70.72%, #ADD1ED 86.45%, #B979AF 110.34%, rgba(217, 217, 217, 0) 113.26%);
  
  @media (max-width: 600px){
    justify-content: center;
    align-items: center;
  }
`;

export const IglooIcon = styled(FontAwesomeIcon)`
  display: flex;
  width: 48px;
  height: 48px;
  margin-left: 117px;
  margin-top: 12px;
  color: #3B5E82;

  @media (max-width: 600px){
    margin-left: 0;
    margin-top: 0;
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.div`
  display: flex;
  height: 29px;
  margin-left: 10px;
  margin-top: 25px;
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #3B5E82;

  @media (max-width: 600px){
    margin-top: 5px;
    font-size: 24px;
  }
`;