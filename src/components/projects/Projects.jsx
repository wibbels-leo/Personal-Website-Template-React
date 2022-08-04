import React from "react";
import Project from "./Project";
import projectsData from "./projectsData.json";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="project-container">
      <Project project={projectsData.projects[2]} />
      <Project project={projectsData.projects[1]} />
      <Project project={projectsData.projects[3]} />
      <Project project={projectsData.projects[0]} />
      <div style={{ height: "5rem" }} />
    </div>
  );
}
