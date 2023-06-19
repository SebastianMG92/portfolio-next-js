"use client";

import React, { useRef, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { LoaderContext } from "@/src/context/LoaderContext";

import styles from "./Loader.module.scss";

const Loader = () => {
  const container = useRef(null);
  const { isLoaded, setIsLoaded } = useContext(LoaderContext);

  useEffect(() => {
    if (!!container.current) {
      let ctx = gsap.context(() => {
        gsap.to(container.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          delay: 0.5,
          duration: 1.2,
          ease: "expo.inOut",
          onUpdate: function () {
            if (this.progress() > 0.6) setIsLoaded(true);
          },
        });
      }, container);

      return () => {
        ctx.revert();
      };
    }
  }, []);

  return (
    <div
      ref={container}
      className={`fixed inset-x-0 top-0 z-50 h-screen bg-root-black ${
        styles["Loader"]
      } ${isLoaded && "pointer-events-none"}`}
    >
      <div className="loading">
        <div className="loading-container">
          <div className={styles["Loader__spinner"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
