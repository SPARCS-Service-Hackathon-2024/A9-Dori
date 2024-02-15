import { memo } from "react";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import HashTag from "../../components/Tag/HashTag";
import { Link } from "react-router-dom";

const StudentElem = ({
  name = "최주원",
  school = "서울대학교",
  content = "글로벌 시장 진출 전략에 대한 자문을 원합니다. 연락주시길 바랍니다.",
  hashs = [],
}) => {
  return (
    <Link to="/selectStudent">
      <div
        css={{
          background: "#FFFFFF",
          padding: "16px 0",
        }}
      >
        <AdaptiveCenterDiv>
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
                  marginTop: "4px",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  color: "#98A2B3",
                }}
              >
                {school}
              </div>
              <div
                css={{
                  marginTop: "4px",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: "#98A2B3",
                }}
              >
                {content}
              </div>
              <div
                css={{
                  marginTop: "8px",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                {hashs.map((hash) => (
                  <HashTag name={hash} key={hash} />
                ))}
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
        </AdaptiveCenterDiv>
      </div>
    </Link>
  );
};

export default memo(StudentElem);
