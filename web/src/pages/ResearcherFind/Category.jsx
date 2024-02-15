const Category = ({ name, isSelected = false, ...divProps }) => {
  return (
    <div
      css={{
        padding: "8px 24px",
        color: isSelected ? "#FFFFFF" : "#667085",
        background: isSelected ? "#444CE7" : "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.05)",
        borderRadius: "8px",
        boxShadow:
          "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
        cursor: "pointer",
      }}
      {...divProps}
    >
      {name}
    </div>
  );
};

export default Category;
