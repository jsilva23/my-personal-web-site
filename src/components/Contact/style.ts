import Styled from 'styled-components';

export const Contact = Styled.section`
  height: 100vh;
  background: #3a506b;
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

    strong {
      color: #5bc0be;
    }
  }

  form {
    width: 100%;
    max-width: 750px;
    padding: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    input, textarea {
      padding: 15px 5px;
      outline: none;

      margin: 15px 0;
      background: none;
      border: 1px solid #6fffe9;
      border-radius: 4px;
      color: #fcfcfc;
      font-size: 1.5rem;

      width: 100%;
    }

    button {
      padding: 15px;
      width: 100%;
      max-width: 200px;
      background: #4b8895;
      border: none;
      border-radius: 4px;
      color: #fcfcfc;
      margin: 10px 0;
      cursor: pointer;
      transition: background .2s ease-out;

      &:hover {
        background: #5bc0be;
      }
    }
  }
`