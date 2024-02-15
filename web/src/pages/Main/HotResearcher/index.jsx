import { useMemo } from "react";
import HashTag from "../../../components/Tag/HashTag";
import useHoverProps from "../../../hooks/useHoverProps";
import iconHot from "./iconHot.svg";
import iconNew from "./iconNew.svg";
import iconUser from "./iconUser.svg";

const HotResearcher = ({ name = "", tags = [] }) => {
  const [hoverProps, isHover] = useHoverProps();
  const state = useMemo(() => (Math.random() < 0.5 ? "hot" : "new"), []);

  return (
    <div
      css={{
        width: "147px",
        height: "192px",
        background: "#F2F4F7",
        borderRadius: "8px",
        cursor: "pointer",
        transform: `scale(${isHover ? 1.03 : 1.0})`,
        transition: `all 0.2s ease-in-out`,
      }}
      {...hoverProps}
    >
      <div css={{ height: "24px" }} />
      <div css={{ display: "flex", justifyContent: "center" }}>
        <img
          src={state === "hot" ? iconHot : iconNew}
          alt={state}
          css={{ height: "22px" }}
        />
      </div>
      <div
        css={{ display: "flex", justifyContent: "center", marginTop: "4px" }}
      >
        <div
          css={{
            width: "64px",
            height: "64px",
            background: "#FFFFFF",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow:
              "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
          }}
        >
          <div
            css={{
              width: "56px",
              height: "56px",
              background: "#F9F5FF",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={iconUser}
              alt="profile"
              css={{ width: "28px", height: "28px" }}
            />
          </div>
        </div>
      </div>
      <div
        css={{
          textAlign: "center",
          marginTop: "4px",
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: 800,
          color: "#344054",
        }}
      >
        {name}
      </div>
      <div
        css={{
          marginTop: "4px",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {tags.map((tag, index) => (
          <HashTag name={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HotResearcher;
