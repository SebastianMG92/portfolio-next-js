import React from "react";
import classNames from "classnames";
import { PrismicNextLink } from "@prismicio/next";

import styles from "./Button.module.scss";

const Button = ({
  field,
  className = "",
  type = "solid",
  children,
  ...props
}) => {
  const buttonClasses = classNames(
    "inline-block ",
    styles["Button"],
    {
      ["bg-root-yellow font-extrabold py-2.5 px-4"]: type === "solid",
    },
    className
  );

  if (field) {
    return (
      <PrismicNextLink field={field} className={buttonClasses} {...props}>
        {children}
      </PrismicNextLink>
    );
  }

  return (
    <button type="button" className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
