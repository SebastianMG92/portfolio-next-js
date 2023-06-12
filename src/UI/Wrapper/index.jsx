import React from "react";

import styles from "./Wrapper.module.scss";

const Wrapper = ({ className = "", children, ...props }) => {
  return (
    <div className={`${styles["Wrapper"]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
