import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import BodySignup from "./BodySignup";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import FormLabel from "../../components/Form/FormLabel";
import FormInputText from "../../components/Form/FormInputText";
import Container from "../../components/Container";
import CheckBoxWithLabel from "../../components/Form/CheckBoxWithLabel";
import { createUser, findUser, setLoginedUser } from "../../utils/users";
import userInfoAtom from "../../atoms/userInfo";

const Student = () => {
  const navigate = useNavigate();
  const [valueEmail, setValueEmail] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueGender, setValueGender] = useState();
  const [valueSchool, setValueSchool] = useState("");
  const [valuePurpose, setValuePurpose] = useState({
    isProject: false,
    isMentoring: false,
    isEtc: false,
  });

  useBackgroundColorEffect();

  const setUserInfo = useSetRecoilState(userInfoAtom);
  const onClickNext = () => {
    if (!valueEmail || !valueName || !valueGender || !valueSchool) {
      alert("모든 항목을 입력해주세요");
      return;
    }
    const user = findUser(valueEmail);
    if (user) {
      alert("이미 가입된 이메일입니다");
      return;
    }

    createUser({
      type: "manufacturer",
      email: valueEmail,
      name: valueName,
      gender: valueGender,
      company: valueSchool,
      purpose: valuePurpose,
    });
    const newUser = findUser(valueEmail);
    if (!newUser) {
      alert("오류!");
      return;
    }
    setLoginedUser(newUser);
    setUserInfo(newUser);

    navigate("/signup/complete");
  };

  return (
    <BodySignup onClickNext={onClickNext}>
      <AdaptiveCenterDiv>
        <FormLabel
          css={{
            marginBottom: "8px",
          }}
        >
          이름
        </FormLabel>
        <FormInputText value={valueName} onChangeValue={setValueName} />
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          성별
        </FormLabel>
        <Container
          css={{
            padding: "16px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <CheckBoxWithLabel
            css={{
              width: "100px",
            }}
            boxType="radio"
            label="남자"
            value={valueGender === "male"}
            onChangeValue={() => setValueGender("male")}
          />
          <CheckBoxWithLabel
            css={{
              width: "100px",
            }}
            boxType="radio"
            label="여자"
            value={valueGender === "female"}
            onChangeValue={() => setValueGender("female")}
          />
        </Container>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          이메일 주소
        </FormLabel>
        <FormInputText value={valueEmail} onChangeValue={setValueEmail} />
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          {"학교(대/고)"}
        </FormLabel>
        <FormInputText value={valueSchool} onChangeValue={setValueSchool} />
        <FormLabel
          css={{
            marginTop: "16px",
          }}
        >
          가입 목적
        </FormLabel>
        <div
          css={{
            fontSize: "12px",
            color: "#98A2B3",
            marginBottom: "8px",
          }}
        >
          {"("}중복 선택이 가능합니다{")"}
        </div>
        <Container
          css={{
            padding: "16px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            label="프로젝트 수행"
            value={!!valuePurpose?.isProject}
            onChangeValue={() =>
              setValuePurpose({
                ...valuePurpose,
                isProject: !valuePurpose?.isProject,
              })
            }
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            label="멘토링"
            value={!!valuePurpose?.isMentoring}
            onChangeValue={() =>
              setValuePurpose({
                ...valuePurpose,
                isMentoring: !valuePurpose?.isMentoring,
              })
            }
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            label="기타"
            value={!!valuePurpose?.isEtc}
            onChangeValue={() =>
              setValuePurpose({
                ...valuePurpose,
                isEtc: !valuePurpose?.isEtc,
              })
            }
          />
        </Container>
      </AdaptiveCenterDiv>
    </BodySignup>
  );
};

export default memo(Student);
