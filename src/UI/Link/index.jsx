import React from "react";
import classNames from "classnames";
import { PrismicNextLink } from "@prismicio/next";
import { ArrowRight } from "@/UI";

const Link = ({ field, className = "", children, ...props }) => {
  const isBlank = field.target === "_blank";

  const buttonClasses = classNames(
    {
      ["flex items-center"]: isBlank,
    },
    className
  );

  return (
    <PrismicNextLink field={field} className={buttonClasses}>
      {children}
      {isBlank && (
        <ArrowRight className="ml-px block w-4 origin-center -rotate-45" />
      )}
    </PrismicNextLink>
  );
};

export default Link;
