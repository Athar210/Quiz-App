import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(https://www.mines.edu/webcentral/wp-content/uploads/sites/267/2019/01/PMS-533.png);
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: sans-serif;
    font-weight: 100;
    color: white;
    text-align: center;
    filter: drop-shadow(2px 2px black);
    font-weight: bold;
    margin: 20px;
  }

  .start, .next {
    cursor: pointer;
    border: 2px solid black;
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
