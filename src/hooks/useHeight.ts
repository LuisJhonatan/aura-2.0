import { useEffect, useState } from "react";

export default function useHeight() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      const height = window.innerHeight;
      setHeight(height);
    };

    window.addEventListener("resize", updateHeight);

    updateHeight();

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return { height };
}
