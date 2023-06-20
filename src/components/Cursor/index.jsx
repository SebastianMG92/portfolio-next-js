"use client";
import React, { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import styles from "./Cursor.module.scss";
import { CursorContext } from "@/src/context/CursorContext";

const Cursor = () => {
  const { cursor } = useContext(CursorContext);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    const { clientX: x, clientY: y } = event;
    setMousePosition({ x, y });
  };

  const cursorClasses = classNames(styles["Cursor"], {
    [styles["Cursor--link"]]: cursor.includes("link"),
    [styles["Cursor--white"]]: cursor.includes("white"),
    [styles["Cursor--scroll"]]: cursor.includes("scroll"),
  });

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const { x, y } = mousePosition;

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div className={styles["Cursor__dot"]}></div>
      <span className={styles["Cursor__label"]}>SCROLL</span>
    </div>
  );
};

export default Cursor;
