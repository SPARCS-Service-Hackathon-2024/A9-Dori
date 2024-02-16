import { useState } from "react";
import { useRecoilValue } from "recoil";
import { css } from "@emotion/react";

import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Container from "../../../components/Container";
import Footer from "../../../components/Footer";
import Bottom from "../Bottom";
import Header from "../Header";
import FormLabel from "../../../components/Form/FormLabel";
import userInfoAtom from "../../../atoms/userInfo";

const Form = ({ onNext, onBack }) => {
  const { type, name } = useRecoilValue(userInfoAtom);
  const [valueEtc, setValueEtc] = useState("");

  return (
    <>
      <Header onClickBack={onBack} />
      <div css={{ height: "25px" }} />
      <AdaptiveCenterDiv>
        <FormLabel
          css={{
            marginBottom: "8px",
          }}
        >
          {type === "company"
            ? "기업명"
            : type === "researcher"
            ? "연구원명"
            : "학생명"}
        </FormLabel>
        <Container css={{ padding: "16px" }}>{name}</Container>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          메시지
        </FormLabel>
        <Container css={{ padding: "16px", position: "relative" }}>
          <textarea
            value={valueEtc}
            onChange={(e) => setValueEtc(e.target.value)}
            placeholder="기타 메시지를 입력하세요"
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
      <Bottom text="학생에게 전달하기" onClickButton={onNext} />
    </>
  );
};

export default Form;
