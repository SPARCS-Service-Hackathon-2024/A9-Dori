import { memo } from "react";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Footer from "../../components/Footer";
import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Complete = () => {
  useBackgroundColorEffect();

  return (
    <>
      <div css={{ height: "100px" }} />
      <Footer />
      <AdaptiveBottom>
        <Link to="/home">
          <Button>Dori 시작하기</Button>
        </Link>
      </AdaptiveBottom>
    </>
  );
};

export default memo(Complete);
