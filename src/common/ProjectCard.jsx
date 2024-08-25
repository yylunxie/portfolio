import React from "react";

function ProjectCard({ src, link, name, info }) {
  return (
    <a href={link}>
      <img className="hover" src={src} alt={`${name} logo`} />
      <h3>{name}</h3>
      <p>{info}</p>
    </a>
  );
}

export default ProjectCard;
