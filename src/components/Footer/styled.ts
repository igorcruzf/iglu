import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    #d1e0ef 1.38%,
    #a3d8de 20.03%,
    #fed6df 37.51%,
    #b8e2d2 53.82%,
    #c7afcc 70.72%,
    #add1ed 86.45%,
    #b979af 110.34%,
    rgba(217, 217, 217, 0) 113.26%
  );
  @media (max-width: 600px){
    justify-content: center;
    margin-left: 0;
  }
`;

export const FooterTitle = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #3b5e82;
  margin-top: 10px;
`;

export const IglooIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: #3b5e82;
  margin-right: 10px;
`;
