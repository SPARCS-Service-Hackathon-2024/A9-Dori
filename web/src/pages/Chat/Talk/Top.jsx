import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import HashTag from "../../../components/Tag/HashTag";

import imgProfile from "./imgProfile.png";
import iconDate from "./iconDate.svg";
import iconBack from "./iconBack.svg";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#FFFFFF",
      }}
    >
      <AdaptiveCenterDiv>
        <Link to="/chat">
          <img
            src={iconBack}
            css={{
              position: "absolute",
              top: "8px",
              left: 0,
            }}
          />
        </Link>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
            gap: "8px",
            paddingBottom: "5px",
          }}
        >
          <HashTag name="기업" />
        </div>
        <div css={{ display: "flex", justifyContent: "center" }}>
          <img
            src={imgProfile}
            alt="profile"
            css={{ width: "50px", height: "50px" }}
          />
        </div>
        <div
          css={{
            marginTop: "5px",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          퍼스트솔라 {">"}
        </div>
        <div
          css={{
            paddingTop: "16px",
            paddingBottom: "8px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={iconDate} css={{ height: "22px" }} />
        </div>
      </AdaptiveCenterDiv>
    </div>
  );
};

export default Top;
