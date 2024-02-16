const RadioBox = ({ value = false, onChangeValue }) => {
  return (
    <div
      css={{
        width: "20px",
        height: "20px",
        border: `1px solid ${!!value ? "#444CE7" : "#D0D5DD"}`,
        background: !!value ? "#EEF4FF" : "#FFFFFF",
        borderRadius: "50%",
        cursor: "pointer",
        transition: "all 0.1s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => onChangeValue(!value)}
    >
      <div
        css={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#444CE7",
          opacity: !!value ? 1 : 0,
          transition: "opacity 0.1s ease-in-out",
        }}
      />
    </div>
  );
};

export default RadioBox;
