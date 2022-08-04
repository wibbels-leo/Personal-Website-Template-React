import React from "react";
import ResumeButton from "../buttons/ResumeButton";
import "./Home.css";
import LinkedIn from "../buttons/LinkedIn";
import MailButton from "../buttons/MailButton";
import GithubButton from "../buttons/GithubButton";

export default function home() {
  return (
    <div>
      <p className="title">Welcome</p>
      <p className="title">My name is Leo Wibbels</p>
      <p className="sub-title">I'm a Full Stack Developer.</p>
      <p>This is collection of my latest Work.</p>
      <div className="social-links">
        <ResumeButton />
        <LinkedIn />
        <MailButton />
        <GithubButton href="https://github.com/wibbels-leo" />
      </div>
    </div>
  );
}
