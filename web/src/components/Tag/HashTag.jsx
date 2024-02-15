const HashTag = ({ name = "" }) => {
  let p = {};
  p["기업"] = { color: "#027A48", background: "#ECFDF3" };
  p["무상"] = { color: "#363F72", background: "#F8F9FC" };
  p["유상"] = { color: "#B42318", background: "#FEF3F2" };
  p["채용"] = { color: "#C11574", background: "#FCE7F6" };
  p["자문"] = { color: "#026AA2", background: "#F0F9FF" };
  p["학생"] = { color: "#FF8E00", background: "#FFF4E5" };
  p["기타"] = { color: "#EAECF5", background: "#363F72" };
  p["프로젝트 자문"] = { color: "#C11754", background: "#FCE7F6" };
  p["멘토링"] = { color: "#026AA2", background: "#F0F9FF" };
  const { color = "#027A48", background = "#ECFDF3" } = p?.[name] || {};

  return (
    <div
      css={{
        height: "22px",
        borderRadius: "11px",
        background,
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
      }}
    >
      <div
        css={{
          color,
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
