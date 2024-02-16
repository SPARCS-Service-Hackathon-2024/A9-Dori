import iconDown from "./iconDown.svg";

const Select = ({ value, options = [], onChangeValue, ...spanProps }) => {
  return (
    <span
      css={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        borderRadius: "12px",
        height: "24px",
        border: "1px solid #D0D5DD",
        overflow: "hidden",
        maxWidth: "100%",
        padding: "0 20px 0 10px",
        fontSize: "12px",
        fontWeight: 600,
        color: "#667085",
        // transition: `background 0.2s ease-in-out`,
      }}
      {...spanProps}
    >
      <div
        css={{
          position: "absolute",
          right: "4px",
          top: "0px",
          width: "16px",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={iconDown}
          alt=""
          css={{
            width: "16px",
            height: "16px",
          }}
        />
      </div>
      {options.find((option) => option.value === value)?.name || ""}
      <select
        value={value}
        onChange={(e) => onChangeValue?.(e.target.value)}
        css={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          cursor: "pointer",
        }}
      >
        {options.map(({ value, name }) => (
          <option value={value} key={value}>
            {name}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Select;
