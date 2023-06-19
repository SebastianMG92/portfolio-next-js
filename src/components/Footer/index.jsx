import React from "react";
import { Wrapper, Text, Title, Link } from "@/UI";
import { Marquee } from "@/components";

import { PrismicRichText } from "@prismicio/react";

import styles from "./Footer.module.scss";

const Footer = ({
  tagline,
  title,
  description,
  contactLink,
  contactLabel,
  links,
}) => {
  return (
    <footer
      className={`flex flex-col items-center justify-center overflow-hidden bg-white py-20 text-root-black ${styles["Footer"]}`}
    >
      {!!links.length && <Marquee links={links} />}
    </footer>
  );
};

export default Footer;
