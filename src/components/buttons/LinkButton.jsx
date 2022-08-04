import React from "react";
import { Link } from "react-feather";
import "./GithubButton.css";

export default function LinkButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <Link size={24} className="social-icon" />
      <span className="label">Link</span>
    </a>
  );
}
