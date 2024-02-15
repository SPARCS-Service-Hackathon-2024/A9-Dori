import { useLocation } from "react-router-dom";

import Navigation from "./Navigation";

const Root = ({ children }) => {
  const { pathname } = useLocation();

  const isDisplayNavigation =
    !pathname.includes("/selectUser") &&
    !pathname.includes("/login") &&
    !pathname.includes("/signup");

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
