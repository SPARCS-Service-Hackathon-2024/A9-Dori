import { useState } from "react";
import { useSetRecoilState } from "recoil";

import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import iconLogo from "../../assets/iconLogo.svg";
import Button from "../../components/Button";
import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import Footer from "../../components/Footer";
import FormLabel from "../../components/Form/FormLabel";
import FormInputText from "../../components/Form/FormInputText";
import { findUser, setLoginedUser } from "../../utils/users";
import userInfoAtom from "../../atoms/userInfo";

const Try = () => {
  const [email, setEmail] = useState("");
  const setUserInfo = useSetRecoilState(userInfoAtom);
  useBackgroundColorEffect();

  const onClickLogin = () => {
    if (!email) {
      alert("이메일을 입력해주세요");
      return;
    }
    const user = findUser(email);
    if (!user) {
      alert("가입되지 않은 이메일입니다");
      return;
    }

    setLoginedUser(user);
    setUserInfo(user);
  };

  return (
    <>
      <div css={{ height: "100px" }} />
      <AdaptiveCenterDiv>
        <div css={{ display: "flex", justifyContent: "center" }}>
          <img
            src={iconLogo}
            alt="dori"
            css={{
              width: "min(180px, calc(100% - 60px))",
            }}
          />
        </div>
        <FormLabel
          css={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
        >
          이메일
        </FormLabel>
        <FormInputText value={email} onChangeValue={setEmail} />
      </AdaptiveCenterDiv>
      <Footer />
      <AdaptiveBottom>
        <Button onClick={onClickLogin}>로그인</Button>
      </AdaptiveBottom>
    </>
  );
};

export default Try;
