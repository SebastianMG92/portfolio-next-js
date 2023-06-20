"use client";

import React, { useContext } from "react";
import classNames from "classnames";
import { PrismicNextLink } from "@prismicio/next";
import { ArrowRight } from "@/UI";
import { CursorContext } from "@/src/context/CursorContext";

const Link = ({
  field,
  onMouseEnter,
  onMouseLeave,
  className = "",
  children,
  ...props
}) => {
  const { showCursor, removeCursor } = useContext(CursorContext);
  const isBlank = field.target === "_blank";

  const buttonClasses = classNames(
    {
      ["flex items-center"]: isBlank,
    },
    className
  );

  const onMouseMoveHandler = () => {
    showCursor("link");

    if (onMouseEnter) onMouseEnter();
  };

  const onMouseLeaveHandler = () => {
    removeCursor("link");

    if (onMouseLeave) onMouseLeave();
  };

  return (
    <PrismicNextLink
      field={field}
      className={buttonClasses}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      {isBlank && (
        <ArrowRight className="ml-px block w-4 origin-center -rotate-45" />
      )}
    </PrismicNextLink>
  );
};

export default Link;
