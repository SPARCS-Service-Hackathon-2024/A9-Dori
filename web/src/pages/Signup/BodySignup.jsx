import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import LinkBack from "../../components/Link/LinkBack";

const BodySignup = ({ children }) => {
  return (
    <>
      <div css={{ height: "100px" }} />
      <AdaptiveCenterDiv>
        <div
          css={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#344054",
          }}
        >
          회원 가입을 위한 정보를 입력해주세요
        </div>
      </AdaptiveCenterDiv>
      <div css={{ height: "24px" }} />
      {children}
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
            <Button type="border-gray">이전</Button>
          </LinkBack>
          <Button
            css={{
              width: 0,
              flexGrow: 1,
              flexShrink: 0,
            }}
          >
            다음
          </Button>
        </div>
      </AdaptiveBottom>
    </>
  );
};

export default BodySignup;
