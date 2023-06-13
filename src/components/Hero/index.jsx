"use client";

import React, { useRef } from "react";
import { PrismicRichText } from "@prismicio/react";

import { Section, Wrapper, Title, Text, Button } from "@/UI";

import styles from "./Hero.module.scss";

const Hero = ({ tagline, title, description, link, linkLabel }) => {
  const container = useRef(null);

  const nextSectionHandler = () => {
    if (!container.current) return null;
    const nextSibling = container.current.nextElementSibling;

    if (!!nextSibling) {
      window.scrollTo({
        top: nextSibling.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section ref={container} className={`relative ${styles["Hero"]}`}>
      <Wrapper
        className={`flex items-center justify-center ${styles["Hero--content"]}`}
      >
        <div className="text-center">
          {tagline && (
            <Text
              className="mb-2 font-display uppercase text-root-grey-primary lg:mb-5"
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

      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${styles["Hero--scroll-indicator"]}`}
      >
        <Button
          className="mt-7 font-bold uppercase lg:mt-10"
          type="inline"
          onClick={nextSectionHandler}
        >
          SCROLL
        </Button>
      </div>
    </Section>
  );
};

export default Hero;
