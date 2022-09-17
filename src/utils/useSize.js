import { useEffect, useState } from "react";

const useSize = () => {
  const [size, setSize] = useState({ width: null, height: null });

  useEffect(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }, [setSize]);
  const { width, height } = size;
  return { width, height };
};

export default useSize;
