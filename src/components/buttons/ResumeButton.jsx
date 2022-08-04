import React from "react";
import { FileText } from "react-feather";
import resume from "./resume.pdf";
import "./SocialButton.css";

export default function ResumeButton({ href }) {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <FileText size={24} className="social-icon" />
      <span className="label">Resume</span>
    </a>
  );
}
