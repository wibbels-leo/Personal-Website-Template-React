import React from "react";
import { Linkedin } from "react-feather";
import "./SocialButton.css";

export default function LinkedIn({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <Linkedin size={24} className="social-icon" />
      <span className="label">LinkedIn</span>
    </a>
  );
}
