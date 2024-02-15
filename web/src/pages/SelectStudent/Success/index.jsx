import { useNavigate } from "react-router-dom";
import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Footer from "../../../components/Footer";
import Bottom from "../Bottom";

import background from "./background.svg";

const Success = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/home");
  };

  const styleText = {
    fontSize: "28px",
    fontWeight: 700,
    color: "#344054",
  };

  return (
    <>
      <div css={{ height: "156px" }} />
      <AdaptiveCenterDiv
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div css={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          <div css={[styleText, { color: "#717BBC" }]}>이영섭</div>
          <div css={styleText}>학생 분께</div>
        </div>
        <div css={styleText}>전달 완료되었습니다!</div>
      </AdaptiveCenterDiv>
      <AdaptiveCenterDiv>
        <div css={{ height: "21px" }} />
        <div
          css={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 700,
            color: "#98A2B3",
          }}
        >
          메시지가 올 때까지 기다려 주세요
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            position: "relative",
          }}
        >
          <img src={background} alt="" css={{ maxWidth: "100%" }} />
        </div>
      </AdaptiveCenterDiv>
      <Footer />
      <Bottom text="확인" onClickButton={onClick} />
    </>
  );
};

export default Success;
