import styled from "styled-components";

export const Container = styled.div.attrs(() => ({
    "data-testid": "loading-icon",
}))`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoadingName = styled.div`
  font-family: AvantGarde, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 39px;
  line-height: 29px;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 100px;
`;