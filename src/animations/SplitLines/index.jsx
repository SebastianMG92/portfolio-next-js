"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const SplitLines = ({ delay = 0, children }) => {
  const container = useRef(null);

  useEffect(() => {
    if (!!container.current) {
      let ctx = gsap.context(() => {
        const myText = new SplitType(container.current, { types: "lines" });

        gsap.fromTo(
          myText.lines,
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
  }, []);

  return (
    <div ref={container} className="overflow-hidden">
      {children}
    </div>
  );
};

export default SplitLines;
