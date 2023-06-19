import React from "react";
import classNames from "classnames";

import styles from "./Title.module.scss";

const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

/**
 * Return Title Component
 * @param {Object} props
 * @param {"xs"|"sm"|"md"|"lg"|"xl"|"2xl"|"3xl"} props.size
 * @param {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} props.headingLevel
 */
const Title = ({
  size = "md",
  headingLevel,
  className = "",
  children,
  ...props
}) => {
  const safeHeading = !!headingLevel ? headingLevel.toLowerCase() : "";
  const HeadingTag = validHeadingLevels.includes(safeHeading)
    ? safeHeading
    : "p";

  const titleClasses = classNames(
    "font-heading tracking-wide text-root-black",
    styles["Title"],
    styles[`Title--${size}`],
    className
  );

  return (
    <HeadingTag className={titleClasses} {...props}>
      {children}
    </HeadingTag>
  );
};

export default Title;
