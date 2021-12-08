import Styled from 'styled-components';

export const About = Styled.section`
  height: 50vh;
  background: #fcfcfc;
  padding: 50px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    font-family: 'Bangers', cursive;  
    color: #5bc0be;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    font-size: 2.6rem;
    width: 60%;
    color: #090f23;
  }
`