import { ProjectsList as ProjectsListComponent } from "@/components";

/**
 * @typedef {import("@prismicio/client").Content.ProjectsListSlice} ProjectsListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectsListSlice>} ProjectsListProps
 * @param {ProjectsListProps}
 */
const ProjectsList = ({ slice }) => {
  const { items } = slice;

  if (!!items.length) {
    return <ProjectsListComponent projects={items} />;
  }
};

export default ProjectsList;
