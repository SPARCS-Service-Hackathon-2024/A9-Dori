import { useState } from "react";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Footer from "../../components/Footer";
import Select from "../../components/Input/Select";
import LinkBack from "../../components/Link/LinkBack";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Category from "./Category";
import CompanyElem from "./CompanyElem";

import iconBack from "./iconBack.svg";
import iconSearch from "./iconSearch.svg";

const ResearcherFind = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  useBackgroundColorEffect("#F2F4F7");

  return (
    <>
      <div css={{ background: "#FFFFFF", padding: "12px 0 13px" }}>
        <AdaptiveCenterDiv>
          <div css={{ display: "flex" }}>
            <LinkBack>
              <img
                src={iconBack}
                alt="back"
                css={{ width: "48px", height: "48px" }}
              />
            </LinkBack>
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
              marginTop: "20px",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            <Category
              name="전체"
              isSelected={selectedCategory === "전체"}
              onClick={() => setSelectedCategory("전체")}
            />
            <Category
              name="기업"
              isSelected={selectedCategory === "기업"}
              onClick={() => setSelectedCategory("기업")}
            />
            <Category
              name="학생"
              isSelected={selectedCategory === "학생"}
              onClick={() => setSelectedCategory("학생")}
            />
          </div>
          <div
            css={{
              marginTop: "16px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <Select value="x" options={[{ value: "x", name: "유/무상" }]} />
            <Select value="x" options={[{ value: "x", name: "컨택 목적" }]} />
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
        <CompanyElem />
        <CompanyElem />
        <CompanyElem />
        <CompanyElem />
        <CompanyElem />
      </div>
      <Footer />
    </>
  );
};

export default ResearcherFind;
