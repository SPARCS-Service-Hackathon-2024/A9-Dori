import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";

import iconButtons from "./iconButtons.svg";
import iconSend from "./iconSend.svg";

const Bottom = () => {
  return (
    <div
      css={{
        position: "fixed",
        paddingTop: "12px",
        paddingBottom: "max(env(safe-area-inset-bottom), 30px)",
        left: 0,
        bottom: 0,
        width: "100%",
        background: "#FFFFFF",
        borderRadius: "24px 24px 0px 0px",
        boxShadow: "0px -2px 20px 0px rgba(0, 0, 0, 0.10)",
        overflow: "hidden",
      }}
    >
      <AdaptiveCenterDiv
        css={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img src={iconButtons} css={{ height: "24px" }} alt="" />
        <div
          css={{
            width: 0,
            flexGrow: 1,
            height: "38px",
            borderRadius: "19px",
            background: "#F2F4F7",
          }}
        ></div>
        <div
          css={{
            width: "38px",
            height: "38px",
            borderRadius: "19px",
            background: "#444CE7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: `all 0.2s ease-in-out`,
          }}
        >
          <img
            src={iconSend}
            css={{ width: "24px", height: "24px" }}
            alt="send"
          />
        </div>
      </AdaptiveCenterDiv>
    </div>
  );
};

export default Bottom;
