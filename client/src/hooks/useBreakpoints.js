import { useState, useEffect } from "react";

export const useBreakpoints = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () =>
    window.innerWidth <= 720
      ? setIsMobile(true)
      : setIsMobile(false);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile
};