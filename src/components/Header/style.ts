import Styled from 'styled-components';
import img from '../../assets/pexels-negative-space-160107.jpg';

export const Header = Styled.header`
  height: 100%;
  width: 100%;
  background: rgba(58, 80, 107, 0.8);

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Bangers', cursive;      
    font-size: 20rem;
    margin: 70px 0 50px;
    color: #5bc0be;
  }

  p {
    font-size: 5rem;
    text-align: center;
    width: 50%;
    color: #090f23;
  }

`
