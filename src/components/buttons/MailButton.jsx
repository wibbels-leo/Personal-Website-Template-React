import React from "react";
import { Mail } from "react-feather";
import "./SocialButton.css";

export default function MailButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
    >
      <Mail size={24} className="social-icon" />
      <span className="label">Email</span>
    </a>
  );
}
