import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Button from "../../../components/Button";
import Tag from "../../../components/Tag";
import iconDefaultProfile from "./iconDefaultProfile.svg";

const Profile = () => {
  return (
    <>
      <div
        css={{
          height: "96px",
          borderRadius: "0px 0px 96px 96px",
          background: "#FFFFFF",
          position: "relative",
        }}
      >
        <AdaptiveCenterDiv>
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <Tag type="dori" />
            <Tag type="tech" />
          </div>
        </AdaptiveCenterDiv>
        <div
          css={{
            position: "absolute",
            bottom: "-44px",
            left: "calc(50% - 48px)",
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            background: "#FFFFFF",
            border: "4px solid #FFFFFF",
            boxShadow:
              "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
            overflow: "hidden",
          }}
        >
          <img
            src={iconDefaultProfile}
            alt="profile"
            css={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div css={{ height: "88px" }} />
      <AdaptiveCenterDiv
        css={{
          padding: "16px",
          borderRadius: "8px",
          background: "#FFFFFF",
          boxShadow:
            "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        }}
      />
      <div
        css={{
          position: "fixed",
          bottom: "max(24px, env(safe-area-inset-bottom))",
          left: "0",
          width: "100%",
        }}
      >
        <AdaptiveCenterDiv>
          <Button>이 연구원 선택하기</Button>
        </AdaptiveCenterDiv>
      </div>
    </>
  );
};

export default Profile;
