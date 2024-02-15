import { memo } from "react";
import Bottom from "./Bottom";
import Top from "./Top";

const Talk = () => {
  return (
    <>
      <Top />
      <Bottom />
    </>
  );
};

export default memo(Talk);
