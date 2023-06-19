"use client";

import React, { useRef, useEffect } from "react";
import { PrismicNextLink } from "@prismicio/next";
import classNames from "classnames";
import { gsap } from "gsap";

const Marquee = ({ links, className = "", ...props }) => {
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
  }, [links]);

  const marqueeClasses = classNames("flex py-px w-full", className);
  return (
    <div className={marqueeClasses} {...props}>
      <ul role="list" className="flex" ref={list}>
        {links.concat(links).map((item, index) => (
          <li key={`${item.label}__${index}`} className="uppercase">
            <PrismicNextLink
              field={item.link}
              className="px-5 text-6xl text-root-black lg:px-10 lg:text-9xl"
            >
              {item.link_label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
