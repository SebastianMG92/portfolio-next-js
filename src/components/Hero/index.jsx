"use client";

import React, { useRef, useContext } from "react";

import { Section, Wrapper, Title, Text, Button } from "@/UI";
import { ClipPath, SplitLines } from "@/animations";
import { LoaderContext } from "@/src/context/LoaderContext";

import styles from "./Hero.module.scss";

const Hero = ({ tagline, title, description, link, linkLabel }) => {
  const container = useRef(null);
  const { isLoaded } = useContext(LoaderContext);

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
              className="mb-2 inline-block font-heading uppercase tracking-wider text-root-grey-primary lg:mb-5"
              size="xl"
            >
              <ClipPath paused={!isLoaded}>
                <p>[{tagline}]</p>
              </ClipPath>
            </Text>
          )}
          {title && (
            <Title headingLevel="h1" size="xl" className="uppercase">
              <ClipPath delay={0.2} paused={!isLoaded}>
                {title}
              </ClipPath>
            </Title>
          )}
          {description && (
            <Text className="mx-auto mt-5 max-w-xl lg:mt-7" size="lg">
              <SplitLines delay={1} paused={!isLoaded}>
                {description}
              </SplitLines>
            </Text>
          )}
          {link && linkLabel && (
            <ClipPath
              className="mt-7 inline-block lg:mt-10"
              delay={1}
              paused={!isLoaded}
            >
              <Button field={link}>{linkLabel}</Button>
            </ClipPath>
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Hero;
