import { useState, useEffect } from "react";

interface DynamicSizing {
  fontSize: string;
  topOffset: string;
}

export const useContainerDimensions = (containerId: string): DynamicSizing => {
  const [dimensions, setDimensions] = useState<DynamicSizing>({
    fontSize: "64px",
    topOffset: "-4rem",
  });

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const updateDimensions = (width: number, height: number) => {
      const fontSize = width / 11;
      const topOffset = fontSize / 1.4 + height * 0.018;

      setDimensions({
        fontSize: `${fontSize}px`,
        topOffset: `${topOffset}px`,
      });
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        updateDimensions(entry.contentRect.width, entry.contentRect.height);
      }
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [containerId]);

  return dimensions;
};