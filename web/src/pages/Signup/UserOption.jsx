import { memo } from "react";
import CheckBox from "../../components/Input/CheckBox";

const UserOption = ({ type, isSelected, ...divProps }) => {
  const { name } = {
    researcher: { name: "연구원" },
    manufacturer: { name: "기업회원" },
    student: { name: "학생" },
  }[type];
  return (
    <div
      css={{
        background: "white",
        border: "1px solid #D0D5DD",
        padding: "16px",
        borderRadius: "12px",
        cursor: "pointer",
      }}
      {...divProps}
    >
      <div css={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <CheckBox value={isSelected} />
        {name}
      </div>
    </div>
  );
};

export default memo(UserOption);
