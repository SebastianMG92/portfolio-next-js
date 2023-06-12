import React from "react";
import Project from "./Project";

const ProjectsList = ({ projects }) => {
  return (
    <div className="">
      {projects.map(({ project }) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
