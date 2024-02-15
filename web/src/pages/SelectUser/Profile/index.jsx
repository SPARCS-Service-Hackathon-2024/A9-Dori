import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import AdaptiveHorizontalScroll from "../../../components/AdaptiveDiv/AdaptiveHorizontalScroll";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import FormLabel from "../../../components/Form/FormLabel";
import Tag from "../../../components/Tag";
import HashTag from "../../../components/Tag/HashTag";
import Bottom from "../Bottom";
import Header from "../Header";
import History from "./History";
import iconDefaultProfile from "./iconDefaultProfile.svg";

const styleAbility = {
  flexGrow: 1,
  width: 0,
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: "20px",
  color: "#6172F3",
};

const Profile = ({ onNext }) => {
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
            한국솔라에너지
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
            주임 연구원
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
            <HashTag name="학생" />
            <HashTag name="유상" />
          </div>
          <div
            css={{
              marginTop: "4px",
              display: "flex",
              gap: "8px",
            }}
          >
            <div css={styleAbility}>＃태양광 패널 오염 제거 기술</div>
            <div css={styleAbility}>#전기/전자 석사</div>
            <div css={styleAbility}>#보안 기술</div>
          </div>
        </Container>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          자기소개/하고 싶은 말
        </FormLabel>
        <Container css={{ padding: "16px" }}>
          <div
            css={{
              fontSize: "14px",
              color: "#667085",
              fontWeight: 600,
            }}
          >
            태양광 패널은 표면이 오염되기 쉬워 발전효율이 떨어지고, 주기적인
            유지보수가 필요하다는 단점이 있는데, 이를 극복할 기술 보유 하고
            있습니다. 관심 있으시다면 연락 부탁드립니다. 재생에너지에 관심이
            있는 학생분들의 자문, 멘토링 요구에도 항상 열려 있습니다 :{")"}
          </div>
        </Container>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          Dori 활동 내역
        </FormLabel>
      </AdaptiveCenterDiv>
      <AdaptiveHorizontalScroll>
        <div css={{ display: "flex", gap: "8px" }}>
          <History name="포스코인터내셔널" tags={["기업", "유상"]} />
          <History name="SK텔레콤" tags={["기업", "무상"]} />
          <History name="한국전력" tags={["기업", "무상"]} />
          <History name="포스코인터내셔널" tags={["기업", "유상"]} />
          <History name="SK텔레콤" tags={["기업", "무상"]} />
          <History name="한국전력" tags={["기업", "무상"]} />
        </div>
      </AdaptiveHorizontalScroll>
      <Footer />
      <Bottom text="이 연구원 선택하기" onClickButton={onNext} />
    </>
  );
};

export default Profile;
