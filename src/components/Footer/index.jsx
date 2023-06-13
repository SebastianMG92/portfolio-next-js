import React from "react";
import { Wrapper, Text, Title, Link } from "@/UI";
import { Marquee } from "@/components";

import { PrismicRichText } from "@prismicio/react";

const Footer = ({
  tagline,
  title,
  description,
  contactLink,
  contactLabel,
  links,
}) => {
  return (
    <footer className="overflow-hidden bg-root-black py-20 text-white">
      {!!links.length && <Marquee links={links} />}
    </footer>
  );
};

export default Footer;
