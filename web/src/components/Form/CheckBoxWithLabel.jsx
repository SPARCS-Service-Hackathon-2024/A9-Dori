import CheckBox from "../Input/CheckBox";
import RadioBox from "../Input/RadioBox";

const CheckBoxWithLabel = ({
  boxType = "check",
  label = "",
  value,
  onChangeValue,
  ...props
}) => {
  return (
    <div
      css={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
      {...props}
    >
      {boxType === "check" && (
        <CheckBox
          value={value}
          onChangeValue={onChangeValue}
          css={{ flexShrink: 0 }}
        />
      )}
      {boxType === "radio" && (
        <RadioBox
          value={value}
          onChangeValue={onChangeValue}
          css={{ flexShrink: 0 }}
        />
      )}
      <div
        css={{
          width: 0,
          flexGrow: 1,
          fontSize: "14px",
          fontWeight: 600,
          color: "#475467",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default CheckBoxWithLabel;
