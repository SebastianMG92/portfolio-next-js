"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

import styles from "./SplitLines.module.scss";

const SplitLines = ({ paused = false, delay = 0, children }) => {
  const container = useRef(null);

  useEffect(() => {
    let textSplited = null;

    if (!!container.current) {
      textSplited = new SplitType(container.current, { types: "lines" });
    }

    if (!!container.current && !paused) {
      let ctx = gsap.context(() => {
        gsap.fromTo(
          textSplited.lines,
          {
            opacity: 0,
            y: 100,
          },
          {
            delay,
            stagger: 0.05,
            duration: 0.8,
            opacity: 1,
            y: 0,
          }
        );
      }, container);

      return () => {
        ctx.revert();
      };
    }
  }, [delay, paused]);

  return (
    <div ref={container} className={`overflow-hidden ${styles["SplitLines"]}`}>
      {children}
    </div>
  );
};

export default SplitLines;
