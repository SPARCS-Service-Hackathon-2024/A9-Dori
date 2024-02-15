import Button from "../../components/Button";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";

const Bottom = ({ text = "", onClickButton }) => {
  return (
    <div
      css={{
        position: "fixed",
        bottom: "max(24px, env(safe-area-inset-bottom))",
        left: "0",
        width: "100%",
      }}
    >
      <AdaptiveCenterDiv
        css={{
          padding: "0 12px",
          boxSizing: "border-box",
        }}
      >
        <Button onClick={onClickButton}>{text}</Button>
      </AdaptiveCenterDiv>
    </div>
  );
};

export default Bottom;
