import { memo, useState } from "react";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import BodySignup from "./BodySignup";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import FormLabel from "../../components/Form/FormLabel";
import FormInputText from "../../components/Form/FormInputText";
import Container from "../../components/Container";
import CheckBoxWithLabel from "../../components/Form/CheckBoxWithLabel";

const Researcher = () => {
  const [valueName, setValueName] = useState("");
  const [valueGender, setValueGender] = useState();
  const [valueCompany, setValueCompany] = useState("");
  const [valueAbility, setValueAbility] = useState("");
  const [valueIsRetired, setValueIsRetired] = useState();
  const [valuePurpose, setValuePurpose] = useState({
    isTalent: false,
    isSideJob: false,
    isJobSeeking: false,
    isEtc: false,
  });
  const [valueTarget, setValueTarget] = useState({
    isCompany: false,
    isStudent: false,
  });
  const [valueReward, setValueReward] = useState();

  useBackgroundColorEffect();

  const onClickNext = () => {
    if (
      !valueName ||
      !valueGender ||
      !valueCompany ||
      !valueAbility ||
      typeof valueIsRetired !== "boolean" ||
      !valueReward
    ) {
      alert("모든 항목을 입력해주세요");
      return;
    }
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
          직장명
        </FormLabel>
        <FormInputText value={valueCompany} onChangeValue={setValueCompany} />
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          핵심 역량
        </FormLabel>
        <FormInputText
          value={valueAbility}
          onChangeValue={setValueAbility}
          placeholder="보유 기술 등을 입력해주세요"
        />
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          퇴직자 여부
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
              width: "150px",
            }}
            boxType="radio"
            label="재직 중"
            value={valueIsRetired === true}
            onChangeValue={() => setValueIsRetired(true)}
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            boxType="radio"
            label="퇴직"
            value={valueIsRetired === false}
            onChangeValue={() => setValueIsRetired(false)}
          />
        </Container>
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
            label="재능 기부"
            value={!!valuePurpose?.isTalent}
            onChangeValue={() =>
              setValuePurpose({
                ...valuePurpose,
                isTalent: !valuePurpose?.isTalent,
              })
            }
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            label="부업"
            value={!!valuePurpose?.isSideJob}
            onChangeValue={() =>
              setValuePurpose({
                ...valuePurpose,
                isSideJob: !valuePurpose?.isSideJob,
              })
            }
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            label="구직"
            value={!!valuePurpose?.isJobSeeking}
            onChangeValue={() =>
              setValuePurpose({
                ...valuePurpose,
                isJobSeeking: !valuePurpose?.isJobSeeking,
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
        <FormLabel
          css={{
            marginTop: "16px",
          }}
        >
          매칭 희망 대상
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
            label="기업"
            value={!!valueTarget?.isCompany}
            onChangeValue={() =>
              setValueTarget({
                ...valueTarget,
                isCompany: !valueTarget?.isCompany,
              })
            }
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            label="학생"
            value={!!valueTarget?.isStudent}
            onChangeValue={() =>
              setValueTarget({
                ...valueTarget,
                isStudent: !valueTarget?.isStudent,
              })
            }
          />
        </Container>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          보상 희망 여부
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
              width: "150px",
            }}
            boxType="radio"
            label="유상"
            value={valueReward === "paid"}
            onChangeValue={() => setValueReward("paid")}
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            boxType="radio"
            label="무상"
            value={valueReward === "free"}
            onChangeValue={() => setValueReward("free")}
          />
          <CheckBoxWithLabel
            css={{
              width: "150px",
            }}
            boxType="radio"
            label="경우에 따라 다름"
            value={valueReward === "depends"}
            onChangeValue={() => setValueReward("depends")}
          />
        </Container>
      </AdaptiveCenterDiv>
    </BodySignup>
  );
};

export default memo(Researcher);
