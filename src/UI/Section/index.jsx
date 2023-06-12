import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./Section.module.scss";

const Section = (
  { fullHeight = false, className = "", children, ...props },
  ref
) => {
  const options = {
    fullHeight: styles["Section--full-height"],
  };

  const sectionClasses = classNames(
    {
      [`flex h-screen ${options.fullHeight}`]: fullHeight,
    },
    className
  );
  return (
    <section ref={ref} className={sectionClasses} {...props}>
      {children}
    </section>
  );
};

export default forwardRef(Section);
