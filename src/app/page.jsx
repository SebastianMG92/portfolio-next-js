import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { Hero } from "@/components";

export default async function Home() {
  const client = createClient();
  const {
    data: { tagline, title, description, link, link_label, slices },
  } = await client.getSingle("home_page", {
    fetchLinks: [
      "project.name",
      "project.description",
      "project.project_link",
      "project.type",
      "project.services",
      "project.year",
      "project.mockups",
      "project.keywords",
      "project.show_collaboration",
      "project.collaborator_logo",
      "project.collaborator_link",
      "project.collaborator_name",
    ],
  });

  return (
    <main>
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        link={link}
        linkLabel={link_label}
      />
      <SliceZone slices={slices} components={components} />
    </main>
  );
}
