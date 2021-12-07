import { createGlobalStyle } from 'styled-components';
import img from '../assets/pexels-negative-space-160107.jpg';

 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Nunito', sans-serif;
  }

`;
 
export default GlobalStyle;