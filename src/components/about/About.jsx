import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <img
        className="contact-image"
        src={process.env.PUBLIC_URL + "/headshot.jpeg"}
        alt="Leo"
      />
      <p className="about-paragraph">first paragraph</p>
      <p className="about-paragraph">second paragraph</p>
      <p className="about-paragraph">third paragraph</p>
      <p className="about-paragraph">fourth paragraph</p>
    </div>
  );
}
