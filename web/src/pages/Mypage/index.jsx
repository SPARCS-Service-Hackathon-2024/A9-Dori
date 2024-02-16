import { memo } from "react";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import { setLoginedUser } from "../../utils/users";
import { useSetRecoilState } from "recoil";
import userInfoAtom from "../../atoms/userInfo";
import Footer from "../../components/Footer";

const Mypage = () => {
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const onClickLogout = () => {
    setLoginedUser(null);
    setUserInfo(null);
  };
  return (
    <>
      <AdaptiveCenterDiv>
        <div
          css={{
            cursor: "pointer",
          }}
          onClick={onClickLogout}
        >
          로그아웃
        </div>
      </AdaptiveCenterDiv>
      <Footer />
    </>
  );
};

export default memo(Mypage);
