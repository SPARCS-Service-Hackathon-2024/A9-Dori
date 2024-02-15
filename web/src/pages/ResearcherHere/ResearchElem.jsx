import { memo } from "react";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Tag from "../../components/Tag";
import HashTag from "./HashTag";

const ResearchElem = ({
  tags = [],
  name = "최주원",
  companyName = "국방과학 연구소",
  roleName = "본부장",
}) => {
  const styleAbility = {
    flexGrow: 1,
    width: 0,
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "20px",
    color: "#6172F3",
  };
  return (
    <div
      css={{
        background: "#FFFFFF",
        padding: "16px 0",
      }}
    >
      <AdaptiveCenterDiv>
        <div
          css={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <Tag type="dori" />
          <Tag type="idea" />
        </div>
        <div css={{ height: "8px" }} />
        <div css={{ display: "flex", gap: "8px" }}>
          <div
            css={{
              width: 0,
              flexGrow: 1,
            }}
          >
            <div
              css={{
                fontSize: "16px",
                fontWeight: 800,
                lineHeight: "20px",
                color: "#344054",
              }}
            >
              {name}
            </div>
            <div
              css={{
                marginTop: "8px",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "20px",
                color: "#667085",
              }}
            >
              {companyName}
            </div>
            <div
              css={{
                marginTop: "4px",
                fontSize: "14px",
                fontWeight: 700,
                lineHeight: "20px",
                color: "#98A2B3",
              }}
            >
              {roleName}
            </div>
            <div
              css={{
                marginTop: "8px",
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <HashTag name="기업" />
            </div>
          </div>
          <div
            css={{
              width: "82px",
              height: "82px",
              borderRadius: "50%",
              background: "#D9D9D9",
              overflow: "hidden",
              position: "relative",
            }}
          ></div>
        </div>
        <div
          css={{
            marginTop: "4px",
            display: "flex",
            gap: "8px",
          }}
        >
          <div css={styleAbility}>무기제작 능력</div>
          <div css={styleAbility}>전기/전자 석사</div>
          <div css={styleAbility}>보안 기술</div>
        </div>
      </AdaptiveCenterDiv>
    </div>
  );
};

export default memo(ResearchElem);
