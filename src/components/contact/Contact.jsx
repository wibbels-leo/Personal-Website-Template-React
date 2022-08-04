import React from "react";
import "./Contact.css";
import GithubButton from "../buttons/GithubButton";
import MailButton from "../buttons/MailButton";
import LinkedIn from "../buttons/LinkedIn";

export default function Contact() {
  return (
    <div className="contact">
      {/* <img className="contact-image" src="/images/headshot.jpeg" alt="Leo" /> */}
      <div className="social-links">
        <LinkedIn />
        <MailButton />
        <GithubButton href="https://github.com" />
      </div>
    </div>
  );
}
