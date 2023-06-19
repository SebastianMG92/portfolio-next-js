"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import styles from "./ClipPath.module.scss";

const ClipPath = ({ delay = 0, className = "", children, ...props }) => {
  const container = useRef(null);

  useEffect(() => {
    if (!!container.current) {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });

        tl.to(container.current, {
          delay,
          duration: 0.8,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }).to(
          `[class*="${styles["ClipPath__curtain"]}"]`,
          {
            duration: 0.8,
            height: 0,
          },
          "-=.5"
        );
      }, container);

      return () => {
        ctx.revert();
      };
    }
  }, []);

  return (
    <div
      ref={container}
      className={`relative ${className} ${styles["ClipPath"]}`}
      {...props}
    >
      {children}

      <div
        aria-disabled
        className={`curtain pointer-events-none absolute inset-x-0 top-0 h-full bg-root-black text-white ${styles["ClipPath__curtain"]}`}
      >
        <span>{children}</span>
      </div>
    </div>
  );
};

export default ClipPath;
