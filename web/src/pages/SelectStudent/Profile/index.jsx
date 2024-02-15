import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import FormLabel from "../../../components/Form/FormLabel";
import Tag from "../../../components/Tag";
import HashTag from "../../../components/Tag/HashTag";
import Bottom from "../Bottom";
import Header from "../Header";
import iconDefaultProfile from "./iconDefaultProfile.svg";

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
            {/* <Tag type="dori" /> */}
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
            이영섭
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
            서울대학교
          </div>
          <div
            css={{
              marginTop: "4px",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 600,
              color: "#98A2B3",
            }}
          >
            연구원이 되는 것에 관심이 있어 멘토링을 신청하고 싶습니다.
          </div>
          <div
            css={{
              marginTop: "8px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <HashTag name="멘토링" />
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
            서울대학교 화학생명공학부 재학 중인 24세 이영섭이라고 합니다. 대학원
            진학을 고민 중인데 프로필을 보고 저의 관심 분야와 밀접한 관련이
            있으신 것 같아 멘토링을 요청하고자 이렇게 연락드립니다.
          </div>
        </Container>
      </AdaptiveCenterDiv>
      <Footer />
      <Bottom text="이 학생 선택하기" onClickButton={onNext} />
    </>
  );
};

export default Profile;
