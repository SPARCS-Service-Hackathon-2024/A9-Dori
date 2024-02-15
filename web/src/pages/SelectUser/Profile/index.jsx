import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import AdaptivehorizontalScroll from "../../../components/AdaptiveDiv/AdaptivehorizontalScroll";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Tag from "../../../components/Tag";
import HashTag from "../../../components/Tag/HashTag";
import Bottom from "../Bottom";
import Header from "../Header";
import iconDefaultProfile from "./iconDefaultProfile.svg";

const styleAbility = {
  flexGrow: 1,
  width: 0,
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "20px",
  color: "#6172F3",
};

const Profile = () => {
  return (
    <>
      <Header />
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
      <AdaptiveCenterDiv>
        <Container css={{ padding: "16px" }}>
          <div
            css={{
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 800,
              color: "#344054",
            }}
          >
            최주원
          </div>
          <div
            css={{
              marginTop: "8px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 700,
              color: "#667085",
            }}
          >
            국방과학연구소 본원
          </div>
          <div
            css={{
              marginTop: "4px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 700,
              color: "#98A2B3",
            }}
          >
            본부장
          </div>
          <div
            css={{
              marginTop: "8px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <HashTag name="기업" />
            <HashTag name="기업" />
          </div>
          <div
            css={{
              marginTop: "4px",
              display: "flex",
              gap: "8px",
            }}
          >
            <div css={styleAbility}>무기제작 능력</div>
            <div css={styleAbility}>전기/전자 석사</div>
            <div css={styleAbility}>보안 기술</div>
          </div>
        </Container>
        <div
          css={{
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 700,
            color: "#344054",
          }}
        >
          자기소개/하고 싶은 말
        </div>
        <Container css={{ padding: "16px" }}></Container>
        <div
          css={{
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 700,
            color: "#344054",
          }}
        >
          Dori 활동 내역
        </div>
      </AdaptiveCenterDiv>
      <AdaptivehorizontalScroll>
        <div css={{ display: "flex", gap: "8px" }}>
          <Container
            css={{ width: "148px", height: "172px", flexShrink: 0 }}
          ></Container>
        </div>
      </AdaptivehorizontalScroll>
      <Footer />
      <Bottom text="이 연구원 선택하기" />
    </>
  );
};

export default Profile;
