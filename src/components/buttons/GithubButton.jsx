import React from "react";
import { GitHub } from "react-feather";
import "./SocialButton.css";

export default function GithubButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <GitHub size={24} className="social-icon" />
      <span className="label">Github</span>
    </a>
  );
}
