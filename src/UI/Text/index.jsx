import React from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";

/**
 * Return Text Component
 * @param {Object} props
 * @param {"2xs"|"xs"|"sm"|"md"|"lg"|"xl"} props.size
 */
const Text = ({ size = "md", className = "", children, ...props }) => {
  const textClasses = classNames(
    styles["Text"],
    styles[`Text--${size}`],
    className
  );

  return (
    <div className={textClasses} {...props}>
      {children}
    </div>
  );
};

export default Text;
