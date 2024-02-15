import { useState } from "react";
import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Bottom from "../Bottom";
import Header from "../Header";
import Title from "../Title";
import CheckBoxWithLabel from "./CheckBoxWithLabel";

const Form = ({ onBack, onNext }) => {
  const [isTech, setIsTech] = useState(false);
  const [isRecruit, setIsRecruit] = useState(false);
  const [isConsult, setIsConsult] = useState(false);
  const [isEtc, setIsEtc] = useState(false);

  return (
    <>
      <Header onClickBack={onBack} />
      <div css={{ height: "25px" }} />
      <AdaptiveCenterDiv>
        <Title
          css={{
            marginBottom: "8px",
          }}
        >
          기업명
        </Title>
        <Container css={{ padding: "16px" }}>롯데정밀화학</Container>
        <Title
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          컨택 목적
        </Title>
        <Container css={{ padding: "16px" }}>
          <div css={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <CheckBoxWithLabel
              css={{
                flexGrow: 1,
                width: 0,
              }}
              label="기술력"
              value={isTech}
              onChangeValue={setIsTech}
            />
            <CheckBoxWithLabel
              css={{
                flexGrow: 1,
                width: 0,
              }}
              label="채용"
              value={isRecruit}
              onChangeValue={setIsRecruit}
            />
            <CheckBoxWithLabel
              css={{
                flexGrow: 1,
                width: 0,
              }}
              label="자문"
              value={isConsult}
              onChangeValue={setIsConsult}
            />
          </div>
          <CheckBoxWithLabel
            label="기타"
            value={isEtc}
            onChangeValue={setIsEtc}
          />
        </Container>
        <Title
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          지불 용의 금액
        </Title>
        <Container css={{ padding: "16px" }}></Container>
        <Title
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          세부 요청 내역
        </Title>
        <Container css={{ padding: "16px" }}></Container>
      </AdaptiveCenterDiv>
      <Footer />
      <Bottom text="요청 전송하기" onClickButton={onNext} />
    </>
  );
};

export default Form;
