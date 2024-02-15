import { useEffect, useRef } from "react";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import AdaptiveHorizontalScroll from "../../components/AdaptiveDiv/AdaptivehorizontalScroll";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import HotResearcher from "./HotResearcher";

import iconLogo from "./iconLogo.svg";
import iconSetting from "./iconSetting.svg";

const hotResearcherDummys = [{}, {}, {}, {}, {}];
const hotResearchers = [
  ...hotResearcherDummys,
  ...hotResearcherDummys,
  ...hotResearcherDummys,
  ...hotResearcherDummys,
];

const Main = () => {
  const hotResearchsRef = useRef(null);
  useBackgroundColorEffect("#F2F4F7");

  useEffect(() => {
    const interval = setInterval(() => {
      const bodyScroll = hotResearchsRef.current;
      if (!bodyScroll) return;

      const scrollLeft = bodyScroll.scrollLeft;
      let newScrollLeft = parseInt(scrollLeft / 157) * 157 + 157;
      if (newScrollLeft > hotResearchers.length * 157 - bodyScroll.offsetWidth)
        newScrollLeft = 0;

      bodyScroll?.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div css={{ background: "#FFFFFF" }}>
        <AdaptiveCenterDiv
          css={{
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
            src={iconLogo}
            css={{
              height: "24px",
            }}
            alt="dori"
          />
          <img
            src={iconSetting}
            css={{
              height: "20px",
              width: "20px",
              cursor: "pointer",
            }}
            alt="setting"
          />
        </AdaptiveCenterDiv>
        <AdaptiveCenterDiv
          css={{
            padding: "16px 0",
          }}
        >
          <div css={{ margin: "0 -12px" }}>content</div>
        </AdaptiveCenterDiv>
      </div>
      <div css={{ height: "12px" }} />
      <div css={{ background: "#FFFFFF", paddingTop: "16px" }}>
        <AdaptiveCenterDiv
          css={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            css={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#344054",
              width: 0,
              flexGrow: 1,
            }}
          >
            요즘 뜨고 있는 연구원
          </div>
          <div
            css={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#98A2B3",
              cursor: "pointer",
            }}
          >
            전체보기
          </div>
        </AdaptiveCenterDiv>
        <AdaptiveHorizontalScroll ref={hotResearchsRef}>
          <div
            css={{
              display: "flex",
              gap: "10px",
              paddingTop: "28px",
              paddingBottom: "16px",
            }}
          >
            {hotResearchers.map((_, index) => (
              <HotResearcher key={index} />
            ))}
          </div>
        </AdaptiveHorizontalScroll>
      </div>
    </>
  );
};

export default Main;
