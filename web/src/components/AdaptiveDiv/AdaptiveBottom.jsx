import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";

const AdaptiveBottom = ({ children }) => {
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
        {children}
      </AdaptiveCenterDiv>
    </div>
  );
};

export default AdaptiveBottom;
