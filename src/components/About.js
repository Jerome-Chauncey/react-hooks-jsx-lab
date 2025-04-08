import React from "react";
import { image } from "../data/data";

const element = (
  <div id = "about">
    <h2>About Me</h2>
    <p>Financial Markets Analyst | Agripreneur | Cross-Border Tech Project Leader</p>
    <img src={image} alt="I made this" />
  </div>
)
function About() {
  return <div>{element}</div>; 
}

export default About;
