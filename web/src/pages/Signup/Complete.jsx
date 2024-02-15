import { memo } from "react";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Footer from "../../components/Footer";
import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import imgComplete from "./imgComplete.png";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";

const Complete = () => {
  useBackgroundColorEffect();

  return (
    <>
      <div css={{ height: "100px" }} />
      <AdaptiveCenterDiv>
        <div
          css={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#344054",
            textAlign: "center",
          }}
        >
          회원가입 완료!
        </div>
        <div css={{ display: "flex", justifyContent: "center" }}>
          <img src={imgComplete} alt="" css={{ width: "min(100%, 300px)" }} />
        </div>
        <div
          css={{
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          이제 Dori에서 활동 중인 많은 사용자들과 함께할 수 있어요
        </div>
      </AdaptiveCenterDiv>
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
