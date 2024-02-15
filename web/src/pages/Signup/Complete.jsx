import { memo } from "react";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Footer from "../../components/Footer";
import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import Button from "../../components/Button";

const Complete = () => {
  useBackgroundColorEffect();

  return (
    <>
      <div css={{ height: "100px" }} />
      <Footer />
      <AdaptiveBottom>
        <Button>Dori 시작하기</Button>
      </AdaptiveBottom>
    </>
  );
};

export default memo(Complete);
