import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Footer from "../../components/Footer";
import Select from "../../components/Input/Select";
import LinkBack from "../../components/Link/LinkBack";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import ResearchElem from "./ResearchElem";

import iconBack from "./iconBack.svg";
import iconSearch from "./iconSearch.svg";

const datas = [
  {
    tags: ["dori", "tech"],
    name: "최주원",
    companyName: "한국솔라에너지",
    roleName: "주임 연구원",
    hashs: ["기업", "학생", "유상"],
    ability: "태양광 패널 오염 제거 기술",
  },
  {
    tags: ["idea"],
    name: "김지연",
    companyName: "한화테크윈 연구소",
    roleName: "선임 연구원",
    hashs: ["기업", "무상"],
    ability: "인공지능(AI) 및 기계 학습, 자연어 처리(NLP), 데이터 마이닝",
  },
  {
    tags: ["dori", "tech"],
    name: "이동훈",
    companyName: "LG전자 연구소",
    roleName: "주임 연구원",
    hashs: ["학생"],
    ability: "반도체 제조 공정 기술, 센서 기술, 머신 비전 및 이미지 처리",
  },
  {
    tags: ["idea"],
    name: "박수진",
    companyName: "한국전자통신연구원 (ETRI)",
    roleName: "연구과장",
    hashs: [],
    ability:
      "통신 및 네트워크 프로토콜, 무선 통신 시스템 설계, 신호 처리 알고리즘",
  },
];

const ResearcherHere = () => {
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
        {datas.map(
          ({ tags, name, companyName, roleName, hashs, ability }, index) => (
            <ResearchElem
              key={index}
              tags={tags}
              name={name}
              companyName={companyName}
              roleName={roleName}
              hashs={hashs}
              ability={ability}
            />
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default ResearcherHere;
