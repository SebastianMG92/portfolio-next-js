import React, { Fragment } from "react";

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Section, Wrapper, Title, Text, Button, ArrowRight, Link } from "@/UI";

import styles from "./Project.module.scss";

const Project = ({ project }) => {
  const {
    name,
    description,
    project_link: projectLink,
    type,
    services,
    year,
    mockups,
    keywords,
    collaborator_link: collaboratorLink,
    collaborator_name: collaboratorName,
  } = project.data;
  return (
    <Section className="lg:py-14">
      <Wrapper>
        <div className="grid gap-y-24 lg:grid-cols-12 lg:gap-x-5 lg:gap-y-0">
          <div className="lg:col-span-7 lg:self-center xl:col-span-7">
            {name && (
              <Title className="mb-5 uppercase md:mb-12" headingLevel="h2">
                {name}
              </Title>
            )}

            {description && (
              <Text className="max-w-xl text-root-grey-primary">
                <PrismicRichText field={description} />
              </Text>
            )}

            <ul
              className={`mt-10 flex flex-col sm:flex-row md:mt-16 ${styles["Project--details"]}`}
              role="list"
            >
              {type && (
                <li className="py-4 sm:py-0 sm:pl-3 sm:pr-5 xl:pl-5 xl:pr-10">
                  <Text className="mb-1 font-extrabold">
                    <p>Type</p>
                  </Text>
                  <Text className="text-root-grey-primary">
                    <p>{type}</p>
                  </Text>
                </li>
              )}

              {!!services.length && (
                <li className="py-4 sm:py-0 sm:pl-3 sm:pr-5 xl:pl-5 xl:pr-10">
                  <Text className="mb-1 font-extrabold">
                    <p>Services</p>
                  </Text>
                  <Text className="text-root-grey-primary">
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
                </li>
              )}

              {year && (
                <li className="py-4 sm:py-0 sm:pl-3 sm:pr-5 xl:pl-5 xl:pr-10">
                  <Text className="mb-1 font-extrabold">
                    <p>Year</p>
                  </Text>
                  <Text className="text-root-grey-primary">
                    <p>{year}</p>
                  </Text>
                </li>
              )}

              {collaboratorName && (
                <li className="py-4 sm:py-0 sm:pl-3 sm:pr-5 xl:pl-5 xl:pr-10">
                  <Text className="mb-1 font-extrabold">
                    <p>In collaboration with</p>
                  </Text>

                  <Text className="text-root-grey-primary">
                    {collaboratorLink ? (
                      <Link field={collaboratorLink}>{collaboratorName}</Link>
                    ) : (
                      <p>{collaboratorName}</p>
                    )}
                  </Text>
                </li>
              )}
            </ul>
          </div>

          {mockups.length && (
            <div className="relative lg:col-span-5 xl:col-span-5">
              {!!keywords.length && (
                <ul
                  className="absolute z-10 flex rounded-2xl bg-root-black p-2 text-white"
                  role="list"
                >
                  {keywords.map(({ keyword }, index) => (
                    <li
                      key={`${keyword}__${project.id}-${index}`}
                      className="px-4"
                    >
                      <Text className="font-display">{keyword}</Text>
                    </li>
                  ))}
                </ul>
              )}
              <figure className="relative aspect-[4/5]">
                {mockups.map(({ mockup }) => (
                  <PrismicNextImage
                    key={mockup.url}
                    field={mockup}
                    fill
                    className="object-cover"
                  />
                ))}
              </figure>

              {projectLink && (
                <div className="absolute bottom-0 right-0 z-10">
                  <Button field={projectLink}>Go live</Button>
                </div>
              )}
            </div>
          )}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Project;
