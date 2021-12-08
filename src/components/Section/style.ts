import Styled from 'styled-components';
import img from '../../assets/pexels-negative-space-160107.jpg';

export const Container = Styled.section`
  height: 100vh;
  width: 80vw;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  
  position: absolute;
  right: 0;
  top: 0;
`