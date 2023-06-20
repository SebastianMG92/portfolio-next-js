import React, { useContext } from "react";
import classNames from "classnames";
import { PrismicNextLink } from "@prismicio/next";
import { CursorContext } from "@/src/context/CursorContext";

import styles from "./Button.module.scss";

const Button = ({
  field,
  className = "",
  type = "solid",
  onMouseEnter,
  onMouseLeave,
  children,
  ...props
}) => {
  const { showCursor, removeCursor } = useContext(CursorContext);
  const buttonClasses = classNames(
    "inline-block text-root-black",
    styles["Button"],
    {
      ["bg-root-yellow font-extrabold py-2.5 px-4"]: type === "solid",
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

  if (field) {
    return (
      <PrismicNextLink
        field={field}
        className={buttonClasses}
        onMouseEnter={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
        {...props}
      >
        {children}
      </PrismicNextLink>
    );
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      onMouseEnter={onMouseMoveHandler}
      onMouseLeave={onMouseLeaveHandler}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
