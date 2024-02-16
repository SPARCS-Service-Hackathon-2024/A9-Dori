import { useState } from "react";
import Footer from "../../components/Footer";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Header from "./Header";
import Category from "./Category";
import AdaptiveHorizontalScroll from "../../components/AdaptiveDiv/AdaptiveHorizontalScroll";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Elem from "./Elem";

const categories = ["인기글", "질문있어요", "매칭 후기방", "현직자 소통방"];

const Communicate = () => {
  const [selectedCategory, setSelectedCategory] = useState("인기글");
  useBackgroundColorEffect("#F2F4F7");

  return (
    <>
      <Header />
      <div
        css={{
          background: "#FFFFFF",
          height: "54px",
        }}
      >
        <AdaptiveHorizontalScroll>
          <div css={{ height: "56px", display: "flex" }}>
            {categories.map((name) => (
              <Category
                key={name}
                name={name}
                isSelected={selectedCategory === name}
                onClick={() => setSelectedCategory(name)}
              />
            ))}
          </div>
        </AdaptiveHorizontalScroll>
      </div>
      <div css={{ height: "2px", background: "#D0D5DD" }} />
      <AdaptiveCenterDiv
        css={{
          marginTop: "16px",
          display: "flex",
          gap: "8px",
          flexDirection: "column",
        }}
      >
        <Elem />
        <Elem />
        <Elem />
        <Elem />
        <Elem />
        <Elem />
        <Elem />
        <Elem />
      </AdaptiveCenterDiv>
      <Footer />
    </>
  );
};

export default Communicate;
