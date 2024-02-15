import { useState } from "react";
import { css } from "@emotion/react";
import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Bottom from "../Bottom";
import Header from "../Header";
import Title from "../Title";
import CheckBoxWithLabel from "./CheckBoxWithLabel";
import InputFormText from "./InputFormText";

const Form = ({ onNext, onBack }) => {
  const [isTech, setIsTech] = useState(false);
  const [isRecruit, setIsRecruit] = useState(false);
  const [isConsult, setIsConsult] = useState(false);
  const [isEtc, setIsEtc] = useState(false);
  const [valuePurpose, setValuePurpose] = useState("");
  const [valueAmount, setValueAmount] = useState("");
  const [valueDetail, setValueDetail] = useState("");

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
          <InputFormText
            placeholder="컨택 목적을 입력하세요"
            value={valuePurpose}
            onChangeValue={setValuePurpose}
            css={{ marginTop: "4px", width: "100%" }}
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
        <Container css={{ padding: "16px" }}>
          <div
            css={{
              display: "flex",
              gap: "9px",
              alignItems: "center",
            }}
          >
            <InputFormText
              placeholder="금액을 입력해주세요"
              value={valueAmount}
              onChangeValue={setValueAmount}
              css={{ width: 0, flexGrow: 1 }}
            />
            <div
              css={{
                color: "#475467",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              원
            </div>
          </div>
        </Container>
        <Title
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          세부 요청 내역
        </Title>
        <Container css={{ padding: "16px", position: "relative" }}>
          <textarea
            value={valueDetail}
            onChange={(e) => setValueDetail(e.target.value)}
            placeholder="세부 요청 내역을 입력하세요"
            css={[
              {
                width: "100%",
                resize: "none",
                height: "70px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#344054",
              },
              css`
                &::placeholder {
                  color: #98a2b3;
                }
              `,
            ]}
          />
        </Container>
      </AdaptiveCenterDiv>
      <Footer />
      <Bottom text="요청 전송하기" onClickButton={onNext} />
    </>
  );
};

export default Form;