import useHoverProps from "../../hooks/useHoverProps";

const Button = ({ type = "blue", children, ...divProps }) => {
  const [hoverProps, isHover] = useHoverProps();
  return (
    <div
      css={{
        border: type === "border-gray" ? "1px solid #D0D5DD" : "none",
        padding: "16px",
        lineHeight: "24px",
        fontSize: "16px",
        borderRadius: "12px",
        background:
          type === "border-gray"
            ? isHover
              ? "#F2F4F7"
              : "#FCFCFD"
            : isHover
            ? "#3538CD"
            : "#444CE7",
        color: type === "border-gray" ? "" : "white",
        textAlign: "center",
        transition: "background 0.2s ease-in-out",
        cursor: "pointer",
      }}
      {...hoverProps}
      {...divProps}
    >
      {children}
    </div>
  );
};

export default Button;
