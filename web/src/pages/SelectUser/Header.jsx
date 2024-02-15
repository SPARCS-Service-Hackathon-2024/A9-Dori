import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import iconBack from "./iconBack.svg";

const Header = ({ onClickBack }) => (
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
        }}
      >
        <img
          src={iconBack}
          alt="back"
          css={{ cursor: "pointer" }}
          onClick={onClickBack}
        />
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
