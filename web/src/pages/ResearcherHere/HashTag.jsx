const HashTag = ({ name = "" }) => {
  return (
    <div
      css={{
        height: "22px",
        borderRadius: "11px",
        background: "#ECFDF3",
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
      }}
    >
      <div
        css={{
          color: "#027A48",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "18px",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export default HashTag;
