import { memo } from "react";
import AdaptiveCenterDiv from "../../AdaptiveDiv/AdaptiveCenterDiv";
import IconHome from "./IconHome";
import IconInbox from "./IconInbox";
import IconChat from "./IconChat";
import IconMe from "./IconMe";
import { Link } from "react-router-dom";

const Button = ({ Icon, name = "", to = "/" }) => {
  return (
    <Link to={to}>
      <div
        css={{
          flexGrow: 1,
          maxWidth: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          cursor: "pointer",
        }}
      >
        <Icon />
        <div
          css={{
            fontSize: "12px",
            lineHeight: "16px",
            color: "#98A2B3",
          }}
        >
          {name}
        </div>
      </div>
    </Link>
  );
};

const Navigation = () => {
  return (
    <div
      css={{
        position: "fixed",
        paddingTop: "19px",
        paddingBottom: "max(env(safe-area-inset-bottom), 30px)",
        left: 0,
        bottom: 0,
        width: "100%",
        borderRadius: "24px 24px 0px 0px",
        boxShadow: "0px -2px 20px 0px rgba(0, 0, 0, 0.10)",
        overflow: "hidden",
      }}
    >
      <AdaptiveCenterDiv
        css={{
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button Icon={IconHome} name="홈" to="/" />
        <Button Icon={IconInbox} name="받은 제안" to="/suggest" />
        <Button Icon={IconChat} name="채팅" to="/chat" />
        <Button Icon={IconMe} name="마이페이지" to="mypage" />
      </AdaptiveCenterDiv>
    </div>
  );
};

export default memo(Navigation);
