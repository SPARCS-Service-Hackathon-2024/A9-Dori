import { memo } from "react";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import BodySignup from "./BodySignup";

const Student = () => {
  useBackgroundColorEffect();
  return <BodySignup></BodySignup>;
};

export default memo(Student);
