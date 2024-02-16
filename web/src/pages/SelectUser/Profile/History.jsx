import { memo } from "react";
import Container from "../../../components/Container";
import HashTag from "../../../components/Tag/HashTag";

const History = ({ name = "", tags = [] }) => {
  return (
    <Container
      css={{
        width: "148px",
        height: "172px",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <div css={{ height: "16px" }} />
      <div css={{ display: "flex", justifyContent: "center" }}>
        <div
          css={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "#FFFFFF",
            boxShadow:
              "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
      <div
        css={{
          marginTop: "8px",
          fontSize: "16px",
          fontWeight: 800,
          lineHeight: "20px",
          color: "#344054",
          textAlign: "center",
        }}
      >
        {name}
      </div>
      <div
        css={{
          marginTop: "4px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {tags.map((tag) => (
          <HashTag name={tag} />
        ))}
      </div>
      <div
        css={{
          marginTop: "4px",
          fontSize: "11px",
          fontWeight: 500,
          color: "#667085",
          textAlign: "center",
        }}
      >
        <span css={{ color: "#444CE7", fontWeight: 700 }}>채용</span> 목적으로
        컨택을 받았어요
      </div>
    </Container>
  );
};

export default memo(History);
