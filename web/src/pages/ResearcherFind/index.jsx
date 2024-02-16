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
import StudentElem from "./StudentElem";

const dataCompanys = [
  {
    type: "company",
    tags: ["dori"],
    name: "퍼스트 솔라",
    content:
      "고효율의 태양광 패널을 생산하기 위한 제조 기술 개발이 필요합니다.",
    hashs: ["자문", "유상"],
  },
  {
    type: "company",
    tags: [],
    name: "바이오젠",
    content:
      "다양한 종류의 세포를 배양하고 단백질 등의 생물학적 제품을 대량으로 생산하기 위한 세포 배양 및 발현 기술이 필요합니다.",
    hashs: ["채용", "무상"],
  },
  {
    type: "company",
    tags: [],
    name: "GE 재생 에너지",
    content:
      "에너지 생산 및 사용의 효율성을 높이고 비용을 절감하기 위한 조언이 필요합니다.",
    hashs: ["자문", "유상"],
  },
  {
    type: "company",
    tags: [],
    name: "파이어아이",
    content:
      "제로데이 공격 및 알려지지 않은 악성 코드와 같은 위협으로부터 조직을 보호하기 위한 기술이 필요합니다. 연구자님의 성과에 따라 채용과도 연계될 예정입니다.",
    hashs: ["채용", "무상"],
  },
];
const dataStudents = [
  {
    type: "student",
    name: "이영섭",
    school: "서울대학교",
    content: "연구원이 되는 것에 관심이 있어 멘토링을 신청하고 싶습니다.",
    hashs: ["멘토링", "유상"],
  },
  {
    type: "student",
    name: "익명의 야옹이",
    school: "관악고등학교",
    content: "빅데이터 관련 프로젝트를 진행 중인데 자문이 필요합니다.",
    hashs: ["프로젝트 자문", "무상"],
  },
  {
    type: "student",
    name: "김하은",
    school: "대전과학고등학교",
    content:
      "수업 내용 중 이해가 어려운 부분이 있어 채팅으로 질문 드리고 싶습니다.",
    hashs: ["기타", "무상"],
  },
  {
    type: "student",
    name: "익명의 공룡",
    school: "KAIST",
    content: "진로 관련하여 고민이 많아 멘토링 신청을 하고 싶습니다.",
    hashs: ["멘토링", "유상"],
  },
];
const datas = [...dataCompanys, ...dataStudents];
datas.sort(() => Math.random() - 0.5);

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
        {datas.map((item, index) =>
          item.type === "company" &&
          (selectedCategory === "전체" || selectedCategory === "기업") ? (
            <CompanyElem
              key={index}
              tags={item.tags}
              name={item.name}
              content={item.content}
              hashs={item.hashs}
            />
          ) : item.type === "student" &&
            (selectedCategory === "전체" || selectedCategory === "학생") ? (
            <StudentElem
              key={index}
              name={item.name}
              school={item.school}
              content={item.content}
              hashs={item.hashs}
            />
          ) : (
            <div key={index} />
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default ResearcherFind;
