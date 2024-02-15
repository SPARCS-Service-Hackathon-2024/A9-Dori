import { memo } from "react";

import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Profile from "./Profile";
import Success from "./Success";

const SelectUser = () => {
  useBackgroundColorEffect();
  return (
    <>
      <Profile />
      {/* <Success /> */}
    </>
  );
};

export default memo(SelectUser);
