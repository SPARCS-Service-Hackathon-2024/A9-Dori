import { useEffect, useState } from "react";

const getBodySize = () => {
  return [document.body.clientWidth, document.body.clientHeight];
};

const useBodySize = () => {
  const [bodySize, setBodySize] = useState(getBodySize());

  useEffect(() => {
    const handleResize = () => setBodySize(getBodySize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return bodySize;
};

export default useBodySize;
