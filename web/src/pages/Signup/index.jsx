import { useState } from "react";
import AdaptiveBottom from "../../components/AdaptiveDiv/AdaptiveBottom";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import LinkBack from "../../components/Link/LinkBack";
import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import UserOption from "./UserOption";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedType, setSelectedType] = useState();
  useBackgroundColorEffect();

  return (
    <>
      <div css={{ height: "100px" }} />
      <AdaptiveCenterDiv>
        <div
          css={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#344054",
          }}
        >
          어떤 회원으로 오셨나요?
        </div>
        <div css={{ fontSize: "16px", color: "#98A2B3", marginTop: "4px" }}>
          선택에 따라 앱에서 사용할 수 있는 기능이 달라져요
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginTop: "24px",
          }}
        >
          {["researcher", "manufacturer", "student"].map((type) => (
            <UserOption
              key={type}
              type={type}
              onClick={() => setSelectedType(type)}
              isSelected={selectedType === type}
            />
          ))}
        </div>
      </AdaptiveCenterDiv>
      <AdaptiveBottom>
        <div css={{ display: "flex", gap: "10px" }}>
          <LinkBack
            css={{
              width: 0,
              flexGrow: 1,
            }}
          >
            <Button type="border-gray">이전</Button>
          </LinkBack>
          {selectedType && (
            <Link
              to={`/signup/${selectedType}`}
              css={{
                width: 0,
                flexGrow: 1,
              }}
            >
              <Button>다음</Button>
            </Link>
          )}
        </div>
      </AdaptiveBottom>
      <Footer />
    </>
  );
};

export default Signup;
