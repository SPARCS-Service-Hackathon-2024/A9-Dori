import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Footer from "../../components/Footer";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";

import iconLogo from "../../assets/iconLogo.svg";
import Button from "../../components/Button";

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
        <div css={{ height: "max(100px, calc(100vh - 350px))" }} />
        <div css={{ margin: "0 10px" }}>
          <Button>로그인</Button>
        </div>
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
        </div>
      </AdaptiveCenterDiv>
      <div css={{ height: "50px" }} />
    </>
  );
};

export default Login;
