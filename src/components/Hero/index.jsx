"use client";

import React, { useRef, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";

import { Section, Wrapper, Title, Text, Button, ClipPathAnimation } from "@/UI";
import { ClipPath, SplitLines } from "@/animations";

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
              className="mb-2 inline-block font-display uppercase text-root-grey-primary lg:mb-5"
              size="xl"
            >
              <ClipPath>
                <p>[{tagline}]</p>
              </ClipPath>
            </Text>
          )}
          {title && (
            <Title headingLevel="h1" size="xl" className="uppercase">
              <ClipPath delay={0.2}>{title}</ClipPath>
            </Title>
          )}
          {description && (
            <Text className="mx-auto mt-5 max-w-xl lg:mt-7" size="lg">
              <SplitLines delay={0.4}>{description}</SplitLines>
            </Text>
          )}
          {link && linkLabel && (
            <ClipPath className="mt-7 inline-block lg:mt-10" delay={0.6}>
              <Button field={link}>{linkLabel}</Button>
            </ClipPath>
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Hero;
