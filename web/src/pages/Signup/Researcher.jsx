import { memo } from "react";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import BodySignup from "./BodySignup";

const Researcher = () => {
  useBackgroundColorEffect();
  return <BodySignup></BodySignup>;
};

export default memo(Researcher);
