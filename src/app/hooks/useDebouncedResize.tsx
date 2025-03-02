"use client"; // Mark this file as a Client Component

import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useDebouncedResize = () => {
  // Initialize state safely for SSR
  const [size, setSize] = useState(() => ({
    width: 0,
    height: 0,
  }));

  useEffect(() => {
    // Exit early if running on the server
    if (typeof window === "undefined") return;

    setSize({ width: window.innerWidth, height: window.innerHeight });

    // Debounced resize handler
    const handleResize = debounce(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, 100);

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      handleResize.cancel();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};

export default useDebouncedResize;
