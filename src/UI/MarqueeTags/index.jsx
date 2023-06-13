"use client";

import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import { gsap } from "gsap";
import { Text } from "@/UI";

import styles from "./MarqueeTags.module.scss";

const MarqueeTags = ({ keywords, className = "", ...props }) => {
  const list = useRef(null);

  useEffect(() => {
    if (!!list.current) {
      let ctx = gsap.context(() => {
        gsap.to(list.current, {
          x: "-50%",
          repeat: -1,
          duration: 20,
          ease: "linear",
        });
      });

      return () => {
        ctx.revert();
      };
    }
  }, [keywords]);

  const marqueeClasses = classNames(
    "flex py-px",
    styles["MarqueeTags"],
    className
  );

  return (
    <div className={marqueeClasses} {...props}>
      <ul role="list" className="flex" ref={list}>
        {keywords.concat(keywords).map(({ keyword }, index) => (
          <li
            key={`${keyword}__${index}`}
            className={styles["MarqueeTags--tag"]}
          >
            <Text className="font-display" size="sm">
              {keyword}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarqueeTags;
