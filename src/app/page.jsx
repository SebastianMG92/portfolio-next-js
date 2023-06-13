import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";
import { Hero, Footer } from "@/components";

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
      "project.mockup",
      "project.keywords",
      "project.collaborator_link",
      "project.collaborator_name",
    ],
  });

  const {
    data: {
      tagline: tagLineFooter,
      title: titleFooter,
      contact_link: contactLink,
      contact_label: contactLabel,
      links: linksFooter,
    },
  } = await client.getSingle("footer");

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
      <Footer
        tagline={tagLineFooter}
        title={titleFooter}
        contactLink={contactLink}
        contactLabel={contactLabel}
        links={linksFooter}
      />
    </main>
  );
}
