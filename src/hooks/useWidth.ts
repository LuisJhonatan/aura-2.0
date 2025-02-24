import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth ] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      const wight = window.innerWidth;
      setWidth(wight);
    };

    window.addEventListener("resize", updateWidth);

    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return { width };
}