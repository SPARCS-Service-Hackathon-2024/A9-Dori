const Title = ({ children, ...divProps }) => (
  <div
    css={{
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 700,
      color: "#344054",
    }}
    {...divProps}
  >
    {children}
  </div>
);

export default Title;
