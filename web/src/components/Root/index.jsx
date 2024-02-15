import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import userInfoAtom from "../../atoms/userInfo";
import Navigation from "./Navigation";
import { useEffect } from "react";
import { getLoginedUser } from "../../utils/users";

const Root = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isDisplayNavigation =
    !pathname.includes("/selectUser") &&
    !pathname.includes("/login") &&
    !pathname.includes("/signup");

  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  useEffect(() => {
    const _userInfo = getLoginedUser();
    if (_userInfo) setUserInfo(_userInfo);
    else setUserInfo(null);
  }, []);
  useEffect(() => {
    if (
      userInfo === null &&
      !pathname.includes("/login") &&
      !pathname.includes("/signup")
    ) {
      navigate("/login");
    }
  }, [userInfo, pathname]);

  if (userInfo === undefined) return null;
  return (
    <div
      css={{
        height: "calc(100% - env(safe-area-inset-bottom))",
        position: "relative",
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {children}
      {isDisplayNavigation && <Navigation />}
    </div>
  );
};

export default Root;
