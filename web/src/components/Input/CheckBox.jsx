import iconCheck from "./iconCheck.svg";

const CheckBox = ({ value = false, onChangeValue }) => {
  return (
    <div
      css={{
        width: "20px",
        height: "20px",
        border: `1px solid ${!!value ? "#444CE7" : "#D0D5DD"}`,
        background: !!value ? "#EEF4FF" : "#FFFFFF",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "all 0.1s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => onChangeValue(!value)}
    >
      <img
        src={iconCheck}
        alt="checked"
        css={{
          width: "14px",
          height: "14px",
          opacity: !!value ? 1 : 0,
          transition: "opacity 0.1s ease-in-out",
        }}
      />
    </div>
  );
};

export default CheckBox;
