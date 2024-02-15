const Container = ({ children, ...divProps }) => (
  <div
    css={{
      boxSizing: "border-box",
      borderRadius: "8px",
      background: "#FFFFFF",
      boxShadow:
        "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
    }}
    {...divProps}
  >
    {children}
  </div>
);

export default Container;
