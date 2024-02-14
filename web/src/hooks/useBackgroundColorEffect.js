import { useEffect, useRef } from "react";

export default (color = "#EEF4FF") => {
  const cachedColor = useRef();
  useEffect(() => {
    cachedColor.current = document.body.style.background;
    document.body.style.background = color;
    return () => {
      document.body.style.background = cachedColor.current;
    };
  }, []);
};
