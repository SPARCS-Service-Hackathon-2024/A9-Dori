import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";

import iconLogo from "../../assets/iconLogo.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import Footer from "../../components/Footer";

const Login = () => {
  useBackgroundColorEffect();

  return (
    <>
      <div css={{ height: "100px" }} />
      <AdaptiveCenterDiv>
        <div css={{ display: "flex", justifyContent: "center" }}>
          <img
            src={iconLogo}
            alt="dori"
            css={{
              width: "min(200px, calc(100% - 40px))",
            }}
          />
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: 400,
            color: "#98A2B3",
            alignItems: "end",
            marginTop: "4px",
          }}
        >
          <span css={{ fontWeight: 700, color: "#717BBC", fontSize: "24px" }}>
            도
          </span>
          <span css={{ marginRight: "7px" }}>와줘</span>
          <span css={{ fontWeight: 700, color: "#717BBC", fontSize: "24px" }}>
            리
          </span>
          <span>서치</span>
        </div>
      </AdaptiveCenterDiv>
      <Footer />
      <AdaptiveBottom>
        <Link to="/login/try">
          <Button>로그인</Button>
        </Link>
        <div
          css={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "0 4px",
          }}
        >
          <div css={{ fontSize: "16px", color: "#98A2B3" }}>
            혹은 dori가 처음이세요?
          </div>
          <Link to="/signup">
            <div
              css={{
                fontSize: "16px",
                color: "#717BBC",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              회원가입
            </div>
          </Link>
        </div>
      </AdaptiveBottom>
    </>
  );
};

export default Login;
