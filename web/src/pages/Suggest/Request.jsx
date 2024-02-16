import { useNavigate } from "react-router-dom";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import FormLabel from "../../components/Form/FormLabel";
import Tag from "../../components/Tag";
import HashTag from "../../components/Tag/HashTag";
import Bottom from "./Bottom";
import Header from "./Header";
import iconDefaultProfile from "./iconDefaultProfile.svg";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import LinkBack from "../../components/Link/LinkBack";
import Button from "../../components/Button";

const Request = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onClickNext = () => {
    navigate("/suggest/request/accept");
  };
  useBackgroundColorEffect();
  return (
    <>
      <Header onClickBack={onBack} />
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
            퍼스트 솔라
          </div>
          <div
            css={{
              marginTop: "8px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 600,
              color: "#667085",
            }}
          >
            고효율의 태양광 패널을 생산하기 위한 제조 기술 개발이 필요합니다.
          </div>
          <div
            css={{
              marginTop: "8px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <HashTag name="자문" />
            <HashTag name="유상" />
          </div>
        </Container>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          보상금
        </FormLabel>
        <Container css={{ padding: "16px" }}>
          <div
            css={{
              fontSize: "14px",
              color: "#667085",
              fontWeight: 600,
            }}
          >
            1,000,000 원
          </div>
        </Container>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          상세 설명
        </FormLabel>
        <Container css={{ padding: "16px" }}>
          <div
            css={{
              fontSize: "14px",
              color: "#667085",
              fontWeight: 600,
            }}
          >
            자사 태양광 패널 생산의 효율성을 높이고자 기술력을 동원할
            생각입니다. 태양 에너지를 전기로 변환하는 과정에서 효율성과 내구성을
            높이는 것이 중요합니다. 이와 관련하여 뛰어난 역량을 갖고 계신 분을
            찾습니다.
          </div>
        </Container>
      </AdaptiveCenterDiv>
      <Footer />
      <AdaptiveBottom>
        <div css={{ display: "flex", gap: "10px" }}>
          <LinkBack
            css={{
              width: 0,
              flexGrow: 1,
              flexShrink: 0,
            }}
          >
            <Button type="border-gray">거절하기</Button>
          </LinkBack>
          <Button
            css={{
              width: 0,
              flexGrow: 1,
              flexShrink: 0,
            }}
            onClick={onClickNext}
          >
            수락하기
          </Button>
        </div>
      </AdaptiveBottom>
    </>
  );
};

export default Request;
