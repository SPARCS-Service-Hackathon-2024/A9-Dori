const AdaptiveCenterDiv = ({ children, ...divProps }) => (
  <div
    style={{
      position: "relative",
      width: `calc(min(788px, 100%) - 20px)`,
      margin: "auto",
    }}
    {...divProps}
  >
    {children}
  </div>
);

export default AdaptiveCenterDiv;
