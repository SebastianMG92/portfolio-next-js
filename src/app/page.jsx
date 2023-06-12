import { createClient } from "@/prismicio";

import { Hero } from "@/components";

export default async function Home() {
  const client = createClient();
  const {
    data: { tagline, title, description, link, link_label },
  } = await client.getSingle("home_page");

  return (
    <main>
      <Hero
        tagline={tagline}
        title={title}
        description={description}
        link={link}
        linkLabel={link_label}
      />
    </main>
  );
}
