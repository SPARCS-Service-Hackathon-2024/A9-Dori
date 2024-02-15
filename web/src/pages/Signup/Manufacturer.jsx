import { memo } from "react";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import BodySignup from "./BodySignup";

const Manufacturer = () => {
  useBackgroundColorEffect();
  return <BodySignup></BodySignup>;
};

export default memo(Manufacturer);
