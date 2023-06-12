import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { Section, Wrapper, Title, Text, Button } from "@/UI";

import styles from "./Hero.module.scss";

const Hero = ({ tagline, title, description, link, linkLabel }) => {
  return (
    <Section className={`relative ${styles["Hero"]}`}>
      <Wrapper
        className={`flex items-center justify-center ${styles["Hero--content"]}`}
      >
        <div className="text-center">
          {tagline && (
            <Text
              className="mb-2 font-display uppercase text-root-grey-secondary lg:mb-5"
              size="xl"
            >
              <p>[{tagline}]</p>
            </Text>
          )}
          {title && (
            <Title headingLevel="h1" size="xl" className="uppercase">
              {title}
            </Title>
          )}
          {description && (
            <Text className="mx-auto mt-5 max-w-xl lg:mt-7" size="lg">
              <PrismicRichText field={description} />
            </Text>
          )}
          {link && linkLabel && (
            <Button field={link} className="mt-7 lg:mt-10">
              {linkLabel}
            </Button>
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Hero;
