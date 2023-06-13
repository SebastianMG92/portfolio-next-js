import React from "react";
import Project from "./Project";
import { Wrapper } from "@/UI";

const ProjectsList = ({ projects }) => {
  const themes = ["black", "grey", "white"];

  return (
    <div className="relative">
      {projects.map(({ project }, index) => {
        return (
          <Project
            key={project.id}
            project={project}
            theme={themes[index % 3]}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
