import React from "react";
import About from "../About";
import Header from "../Header";
import Works from "../Works";
import { Container } from "./style";

const Section = () => {

  return (
    <Container>
      <Header />
      <About />
      <Works />
    </Container>
  );
}

export default Section