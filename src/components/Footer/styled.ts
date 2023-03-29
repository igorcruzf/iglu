import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #D1E0EF 1.38%, #A3D8DE 20.03%, #FED6DF 37.51%, #B8E2D2 53.82%, #C7AFCC 70.72%, #ADD1ED 86.45%, #B979AF 110.34%, rgba(217, 217, 217, 0) 113.26%);
`;

export const FooterTitle = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #3B5E82;
  margin-top: 10px;
`;

export const IglooIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #3B5E82;
  margin-right: 10px;
`;