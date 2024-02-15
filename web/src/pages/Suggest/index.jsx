import { memo, useState } from "react";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Category from "./Category";
import Footer from "../../components/Footer";

const Suggest = () => {
  const [selectedCategory, setSelectedCategory] = useState("받은 제안");
  useBackgroundColorEffect();

  return (
    <>
      <div
        css={{
          background: "#FFFFFF",
          height: "54px",
        }}
      >
        <AdaptiveCenterDiv css={{ height: "56px", display: "flex" }}>
          <Category
            name="받은 제안"
            isSelected={selectedCategory === "받은 제안"}
            onClick={() => setSelectedCategory("받은 제안")}
          />
          <Category
            name="나의 제안"
            isSelected={selectedCategory === "나의 제안"}
            onClick={() => setSelectedCategory("나의 제안")}
          />
          <Category
            name="매칭 완료"
            isSelected={selectedCategory === "매칭 완료"}
            onClick={() => setSelectedCategory("매칭 완료")}
          />
        </AdaptiveCenterDiv>
      </div>
      <div css={{ height: "2px" }} />
      <Footer />
    </>
  );
};

export default memo(Suggest);
