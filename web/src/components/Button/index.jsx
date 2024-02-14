import useHoverProps from "../../hooks/useHoverProps";

const Button = ({ children, ...divProps }) => {
  const [hoverProps, isHover] = useHoverProps();
  return (
    <div
      css={{
        padding: "16px",
        lineHeight: "24px",
        fontSize: "16px",
        borderRadius: "12px",
        background: isHover ? "#3538CD" : "#444CE7",
        color: "white",
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
