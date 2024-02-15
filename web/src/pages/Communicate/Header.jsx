import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import LinkBack from "../../components/Link/LinkBack";
import iconBack from "./iconBack.svg";

const Header = () => (
  <>
    <div
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "40px",
        width: "100%",
        background: "#FFFFFF",
        zIndex: 50,
      }}
    >
      <AdaptiveCenterDiv
        css={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          gap: "8px",
        }}
      >
        <LinkBack>
          <img src={iconBack} alt="back" css={{ cursor: "pointer" }} />
        </LinkBack>
        <div css={{ fontWeight: 600, fontSize: "20px" }}>소통해요</div>
      </AdaptiveCenterDiv>
    </div>
    <div
      css={{
        height: "40px",
        background: "#FFFFFF",
      }}
    />
  </>
);

export default Header;
