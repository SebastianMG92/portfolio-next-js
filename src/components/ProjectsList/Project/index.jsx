"use client";
import React, { Fragment, useContext } from "react";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {
  Section,
  Wrapper,
  Title,
  Text,
  MarqueeTags,
  Link,
  ArrowRight,
} from "@/UI";
import { CursorContext } from "@/src/context/CursorContext";

import styles from "./Project.module.scss";

const Project = ({ project, theme }) => {
  const {
    name,
    description,
    project_link: projectLink,
    type,
    services,
    year,
    mockup,
    keywords,
    collaborator_link: collaboratorLink,
    collaborator_name: collaboratorName,
  } = project.data;
  const { showCursor, removeCursor } = useContext(CursorContext);

  const onMouseMoveHandler = () => {
    if (theme === "black") showCursor("white");
  };

  const onMouseLeaveHandler = () => {
    removeCursor("white");
  };

  return (
    <Section
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      className={`relative py-10 lg:sticky lg:top-0 lg:h-screen lg:py-0 ${
        styles["Project"]
      } ${styles[`Project__${theme}`]}`}
    >
      <Wrapper fullWidthRight className="h-full">
        <div className="grid h-full gap-y-10 lg:grid-cols-12 lg:gap-y-0">
          <div className="lg:col-span-5 lg:self-center">
            {!!keywords.length && (
              <MarqueeTags
                keywords={keywords}
                className={`relative mb-10 ${styles["Project--marquee"]}`}
              />
            )}

            {name && (
              <Title
                className={`mb-5 uppercase md:mb-12 ${styles["Project--heading"]}`}
                headingLevel="h2"
              >
                {name}
              </Title>
            )}

            {description && (
              <Text
                className={`text-root-grey-primary ${styles["Project--text"]}`}
              >
                <PrismicRichText field={description} />
              </Text>
            )}

            <ul
              className={`mt-10 flex flex-col md:mt-16 ${styles["Project--details"]}`}
              role="list"
            >
              {type && (
                <li
                  className={`group relative flex items-center justify-between overflow-hidden px-1 py-4 ${styles["Project--detail"]}`}
                >
                  <Text
                    className={`font-extrabold ${styles["Project--heading"]}`}
                  >
                    <p>Type</p>
                  </Text>
                  <Text
                    className={`text-root-grey-primary ${styles["Project--text"]}`}
                  >
                    <p>{type}</p>
                  </Text>

                  <div className="pointer-events-none absolute inset-x-0 top-full h-full bg-white mix-blend-difference duration-100 ease-in-out group-hover:top-0 group-hover:duration-500"></div>
                </li>
              )}

              {!!services.length && (
                <li
                  className={`group flex items-center justify-between overflow-hidden px-1 py-4 ${styles["Project--detail"]}`}
                >
                  <Text
                    className={`font-extrabold ${styles["Project--heading"]}`}
                  >
                    <p>Services</p>
                  </Text>
                  <Text
                    className={`text-root-grey-primary ${styles["Project--text"]}`}
                  >
                    <p>
                      {services.map(({ service }, index) => {
                        const isLast = index === services.length - 1;
                        return (
                          <Fragment key={`${service}__${project.id}-${index}`}>
                            {service}
                            {!isLast && " - "}
                          </Fragment>
                        );
                      })}
                    </p>
                  </Text>
                  <div className="pointer-events-none absolute inset-x-0 top-full h-full bg-white mix-blend-difference duration-100 ease-in-out group-hover:top-0 group-hover:duration-500"></div>
                </li>
              )}

              {year && (
                <li
                  className={`group flex items-center justify-between overflow-hidden px-1 py-4 ${styles["Project--detail"]}`}
                >
                  <Text
                    className={`font-extrabold ${styles["Project--heading"]}`}
                  >
                    <p>Year</p>
                  </Text>
                  <Text
                    className={`text-root-grey-primary ${styles["Project--text"]}`}
                  >
                    <p>{year}</p>
                  </Text>
                  <div className="pointer-events-none absolute inset-x-0 top-full h-full bg-white mix-blend-difference duration-100 ease-in-out group-hover:top-0 group-hover:duration-500"></div>
                </li>
              )}

              {collaboratorName && (
                <li
                  className={`group flex items-center justify-between overflow-hidden px-1 py-4 ${styles["Project--detail"]}`}
                >
                  <Text
                    className={`font-extrabold ${styles["Project--heading"]}`}
                  >
                    <p>In collaboration with</p>
                  </Text>

                  <Text
                    className={`text-root-grey-primary ${styles["Project--text"]}`}
                  >
                    {collaboratorLink ? (
                      <Link field={collaboratorLink}>{collaboratorName}</Link>
                    ) : (
                      <p>{collaboratorName}</p>
                    )}
                  </Text>
                  <div className="pointer-events-none absolute inset-x-0 top-full h-full bg-white mix-blend-difference duration-100 ease-in-out group-hover:top-0 group-hover:duration-500"></div>
                </li>
              )}
            </ul>
          </div>

          {mockup && (
            <div className="relative lg:col-start-7 lg:col-end-13">
              <figure
                className={`relative aspect-[4/6] lg:aspect-auto lg:h-full`}
              >
                <PrismicNextImage
                  field={mockup}
                  fill
                  className="block object-cover object-top"
                />
              </figure>

              {projectLink && (
                <Link
                  field={projectLink}
                  className={`absolute inset-0 z-20 block h-full w-full ${styles["Project--link"]}`}
                >
                  <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between overflow-hidden">
                    <Text
                      size="xl"
                      className={`whitespace-nowrap uppercase ${styles["Project--link--label"]}`}
                    >
                      Visit now
                    </Text>

                    <ArrowRight
                      className={`ml-1 block w-14 ${styles["Project--link--icon"]}`}
                    />
                  </div>
                </Link>
              )}
            </div>
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Project;
