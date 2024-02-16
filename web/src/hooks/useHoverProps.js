import { useCallback, useMemo, useState } from "react";

export default () => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const setBoth = useCallback(
    (v) => {
      setIsHover(v);
      setIsClicked(v);
    },
    [setIsHover, setIsClicked]
  );
  const hoverProps = useMemo(
    () => ({
      onMouseEnter: () => setIsHover(true),
      onMouseDown: () => setIsClicked(true),
      onTouchStart: () => setBoth(true),
      onMouseLeave: () => setBoth(false),
      onMouseUp: () => setIsClicked(false),
      onTouchEnd: () => setBoth(false),
      onTouchCancel: () => setBoth(false),
    }),
    [setIsHover, setIsClicked, setBoth]
  );
  return [hoverProps, isHover, isClicked, setIsHover, setIsClicked];
};
