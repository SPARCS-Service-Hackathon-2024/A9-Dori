import { useEffect } from "react";

const useBackgroundColor = (color = "#EEF4FF") => {
  const cachedColor = useRef();
  useEffect(() => {
    cachedColor.current = document.body.style.background;
    document.body.style.background = color;
    return () => {
      document.body.style.background = cachedColor.current;
    };
  }, []);
};

export default useBackgroundColor;
