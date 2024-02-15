import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Footer from "../../components/Footer";
import Select from "../../components/Input/Select";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import ResearchElem from "./ResearchElem";

import iconBack from "./iconBack.svg";
import iconSearch from "./iconSearch.svg";

const ResearcherHere = () => {
  useBackgroundColorEffect("#F2F4F7");
  return (
    <>
      <div css={{ background: "#FFFFFF", padding: "12px 0 13px" }}>
        <AdaptiveCenterDiv>
          <div css={{ display: "flex" }}>
            <img
              src={iconBack}
              alt="back"
              css={{ width: "48px", height: "48px" }}
            />
            <div
              css={{
                width: 0,
                flexGrow: 1,
                height: "48px",
                borderRadius: "24px",
                background: "#EAECF0",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                css={{
                  width: 0,
                  flexGrow: 1,
                  fontSize: "18px",
                  color: "#344054",
                  paddingLeft: "22px",
                  paddingRight: "8px",
                }}
                placeholder="검색어를 입력하세요"
              />
              <img
                src={iconSearch}
                alt=""
                css={{
                  width: "24px",
                  height: "24px",
                  paddingRight: "17px",
                }}
              />
            </div>
          </div>
          <div
            css={{
              marginTop: "12px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <Select value="x" options={[{ value: "x", name: "유/무상" }]} />
            <Select value="x" options={[{ value: "x", name: "대상" }]} />
            <Select value="x" options={[{ value: "x", name: "강점" }]} />
          </div>
        </AdaptiveCenterDiv>
      </div>
      <div css={{ height: "12px" }} />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <ResearchElem />
        <ResearchElem />
        <ResearchElem />
        <ResearchElem />
        <ResearchElem />
      </div>
      <Footer />
    </>
  );
};

export default ResearcherHere;
