import React from "react";
import ImageSlider from "./ImageSlider";
import "./Projects.css";
import GithubButton from "../buttons/GithubButton";
import LinkButton from "../buttons/LinkButton";

export default function Project({ project }) {
  return (
    <div className="container">
      <p className="title">{project.name}</p>
      {project.images.length > 0 && <ImageSlider slides={project.images} />}
      <p>Skills: {project.skills}</p>
      <p className="description">{project.description}</p>
      {project.url.length > 0 && <LinkButton href={project.url} />}
      {project.github.length > 0 && <GithubButton href={project.github} />}
    </div>
  );
}
