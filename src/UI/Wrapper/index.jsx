import React from "react";
import classNames from "classnames";

import styles from "./Wrapper.module.scss";

const Wrapper = ({
  className = "",
  fullWidthRight = false,
  children,
  ...props
}) => {
  const options = {
    fullWidthRight: styles["Wrapper--full-width-right"],
  };

  const wrapperClasses = classNames(
    styles["Wrapper"],
    {
      [options.fullWidthRight]: fullWidthRight,
    },
    className
  );

  return (
    <div className={wrapperClasses} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
