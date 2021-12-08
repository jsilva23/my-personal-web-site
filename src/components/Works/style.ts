import Styled from 'styled-components';

export const Works = Styled.section`
  overflow: hidden;
  background: #fcfcfc;
  padding: 50px 0;

  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
    font-family: 'Bangers', cursive;  
    color: #5bc0be;
    margin-bottom: 50px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

.snip1527 {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  color: #fcfcfc;
  float: left;
  font-family: 'Lato', Arial, sans-serif;
  font-size: 16px;
  margin: 30px;
  max-width: 450px;
  min-width: 250px;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
  height: 400px;
}

.snip1527 * {
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.image {
    max-width: 100%;
  height: 100%;
}

.snip1527 img {
  max-width: 100%;
  height: 100%;
  vertical-align: top;
  position: relative;
  object-fit: cover;
}

.snip1527 figcaption {
  padding: 25px 20px 25px;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.snip1527 figcaption:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #700877;
  content: '';
  background: -moz-linear-gradient(90deg, #700877 0%, #ff2759 100%, #ff2759 100%);
  background: -webkit-linear-gradient(90deg, #700877 0%, #ff2759 100%, #ff2759 100%);
  background: linear-gradient(90deg, #700877 0%, #ff2759 100%, #ff2759 100%);
  opacity: 0.8;
  z-index: -1;
  width: 100%;
}

.snip1527 h3,
.snip1527 p {
  margin: 0;
  padding: 0;
}

.snip1527 h3 {
  display: inline-block;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 5px;
}

.snip1527 p {
  font-size: 0.8em;
  line-height: 1.6em;
  margin-bottom: 0px;
}

.snip1527 a {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
}

.snip1527:hover img,
.snip1527.hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


/* Demo purposes only */

body {
  background-color: #212121;
}

`