const AdaptiveCenterDiv = ({ children, ...divProps }) => (
  <div
    css={{
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
