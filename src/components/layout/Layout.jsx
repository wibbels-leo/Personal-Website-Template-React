import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import { Briefcase, Home, User } from "react-feather";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import "./Layout.css";

// const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default function Layout({ children, switchTheme, theme }) {
  return (
    <main>
      <div className="tab-nav">
        <Link className="tab-nav-link" to="/">
          <Home size={24} className="tab-nav-link-icon" />
          <span className="tab-nav-link-text">Home</span>
        </Link>
        <NavLink to="/about" className="tab-nav-link">
          <User size={24} className="tab-nav-link-icon" />
          <span className="tab-nav-link-text">About</span>
        </NavLink>
        <NavLink to="/projects" className="tab-nav-link">
          <Briefcase size={24} className="tab-nav-link-icon" />
          <span className="tab-nav-link-text">Projects</span>
        </NavLink>
        <div className="tab-nav-link">
          <DarkModeToggle
            className="tab-nav-link-icon"
            mode={theme}
            size="sm"
            inactiveTrackColor="#e2e8f0"
            inactiveTrackColorOnHover="#f8fafc"
            inactiveTrackColorOnActive="#cbd5e1"
            activeTrackColor="#334155"
            activeTrackColorOnHover="#1e293b"
            activeTrackColorOnActive="#0f172a"
            inactiveThumbColor="#1e293b"
            activeThumbColor="#e2e8f0"
            onChange={(mode) => {
              switchTheme(mode);
            }}
          />
          <span className="tab-nav-link-text">Dark/Light</span>
        </div>
      </div>
      <nav>
        <div className="nav-inner">
          <Link className="nav-link" to="/">
            <Home size={24} className="nav-link-icon" />
            <span className="nav-link-text">Home</span>
          </Link>
          <NavLink to="/about" className="nav-link">
            <User size={24} className="nav-link-icon" />
            <span className="nav-link-text">About</span>
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            <Briefcase size={24} className="nav-link-icon" />
            <span className="nav-link-text">Projects</span>
          </NavLink>
          <div className="nav-link">
            <DarkModeToggle
              className="nav-link-icon"
              mode={theme}
              size="sm"
              inactiveTrackColor="#e2e8f0"
              inactiveTrackColorOnHover="#f8fafc"
              inactiveTrackColorOnActive="#cbd5e1"
              activeTrackColor="#334155"
              activeTrackColorOnHover="#1e293b"
              activeTrackColorOnActive="#0f172a"
              inactiveThumbColor="#1e293b"
              activeThumbColor="#e2e8f0"
              onChange={(mode) => {
                switchTheme(mode);
              }}
            />
            <span>Dark/Light</span>
          </div>
        </div>
      </nav>
      <div className="page">{children}</div>
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
