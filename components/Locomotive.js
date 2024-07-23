"use client";
import { useEffect } from "react";

const Locomotive = ({ children }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <main>{children}</main>;
};
export default Locomotive;
