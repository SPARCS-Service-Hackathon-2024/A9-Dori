import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

import useHoverProps from "../../../hooks/useHoverProps";

import iconCommunication from "./iconCommunication.svg";
import iconResearcherFind from "./iconResearcherFind.svg";
import iconResearcherHere from "./iconResearcherHere.svg";
import userInfoAtom from "../../../atoms/userInfo";

const SectionTop = () => {
  const { type } = useRecoilValue(userInfoAtom);
  const [hoverProps1, isHovered1] = useHoverProps();
  const [hoverProps2, isHovered2] = useHoverProps();
  const [hoverProps3, isHovered3] = useHoverProps();

  if (type === "researcher") {
    return (
      <div css={{ margin: "0 -12px" }}>
        <div
          css={{
            display: "flex",
            gap: "8px",
            height: "184px",
            position: "relative",
          }}
        >
          <Link
            to="/researcherFind"
            css={{
              width: 0,
              flexGrow: 1,
            }}
          >
            <div
              css={{
                height: "100%",
                background:
                  "linear-gradient(90deg, #3C78F4 0%, #7C53EC 98.19%)",
                borderRadius: "8px",
                transform: `scale(${isHovered1 ? 1.01 : 1.0})`,
                transition: `all 0.2s ease-in-out`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...hoverProps1}
            >
              <img src={iconResearcherFind} alt="연구원 찾아요" />
            </div>
          </Link>
          <div
            css={{
              width: 0,
              flexGrow: 1,
              display: "flex",
              gap: "8px",
              flexDirection: "column",
            }}
          >
            <Link
              css={{
                flexGrow: 1,
                height: 0,
                position: "relative",
              }}
              to="/researcherHere"
            >
              <div
                css={{
                  height: "100%",
                  background: "#E0EAFF",
                  borderRadius: "8px",
                  transform: `scale(${isHovered2 ? 1.02 : 1.0})`,
                  transition: `all 0.2s ease-in-out`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...hoverProps2}
              >
                <img src={iconResearcherHere} alt="연구원 여기 있어요" />
              </div>
            </Link>
            <Link
              to="/communicate"
              css={{
                flexGrow: 1,
                height: 0,
                position: "relative",
              }}
            >
              <div
                css={{
                  height: "100%",
                  background: "#EAECF0",
                  borderRadius: "8px",
                  transform: `scale(${isHovered3 ? 1.02 : 1.0})`,
                  transition: `all 0.2s ease-in-out`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...hoverProps3}
              >
                <img src={iconCommunication} alt="소통해요" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div css={{ margin: "0 -12px" }}>
      <div
        css={{
          display: "flex",
          gap: "8px",
          height: "184px",
          position: "relative",
        }}
      >
        <Link
          to="/researcherHere"
          css={{
            width: 0,
            flexGrow: 1,
          }}
        >
          <div
            css={{
              height: "100%",
              background: "#E0EAFF",
              borderRadius: "8px",
              transform: `scale(${isHovered1 ? 1.01 : 1.0})`,
              transition: `all 0.2s ease-in-out`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            {...hoverProps1}
          >
            <img src={iconResearcherHere} alt="연구원 여기 있어요" />
          </div>
        </Link>
        <div
          css={{
            width: 0,
            flexGrow: 1,
            display: "flex",
            gap: "8px",
            flexDirection: "column",
          }}
        >
          <Link
            css={{
              flexGrow: 1,
              height: 0,
              position: "relative",
            }}
            to="/researcherFind"
          >
            <div
              css={{
                height: "100%",
                background:
                  "linear-gradient(90deg, #3C78F4 0%, #7C53EC 98.19%)",
                borderRadius: "8px",
                transform: `scale(${isHovered2 ? 1.02 : 1.0})`,
                transition: `all 0.2s ease-in-out`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...hoverProps2}
            >
              <img src={iconResearcherFind} alt="연구원 찾아요" />
            </div>
          </Link>
          <Link
            to="/communicate"
            css={{
              flexGrow: 1,
              height: 0,
              position: "relative",
            }}
          >
            <div
              css={{
                height: "100%",
                background: "#EAECF0",
                borderRadius: "8px",
                transform: `scale(${isHovered3 ? 1.02 : 1.0})`,
                transition: `all 0.2s ease-in-out`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              {...hoverProps3}
            >
              <img src={iconCommunication} alt="소통해요" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionTop;
