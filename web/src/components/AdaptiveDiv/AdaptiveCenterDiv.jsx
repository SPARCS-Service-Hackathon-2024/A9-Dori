const AdaptiveCenterDiv = ({ children, ...divProps }) => (
  <div
    css={{
      position: "relative",
      width: `calc(min(808px, 100%) - 40px)`,
      margin: "auto",
    }}
    {...divProps}
  >
    {children}
  </div>
);

export default AdaptiveCenterDiv;
