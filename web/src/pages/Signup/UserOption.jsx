import { memo } from "react";
import CheckBox from "../../components/Input/CheckBox";

import iconInfo from "./iconInfo.svg";

const UserOption = ({ type, isSelected, ...divProps }) => {
  const { name, description } = {
    researcher: {
      name: "연구원",
      description:
        "기업, 학생과 매칭되어 보유한 역량을 활용해 도움을 줄 수 있어요",
    },
    manufacturer: {
      name: "기업회원",
      description:
        "특정 기술력, 자문 등이 필요할 때 연구원의 도움을 받을 수 있어요",
    },
    student: {
      name: "학생",
      description:
        "멘토링, 프로젝트 수행을 위한 도움 등이 필요할 때 연구원의 도움을 받을 수 있어요",
    },
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
      <div
        css={{
          display: isSelected ? "flex" : "none",
          alignItems: "center",
          gap: "2px",
          marginTop: "4px",
        }}
      >
        <img src={iconInfo} alt="info" css={{ width: "16px" }} />
        <div
          css={{ width: 0, flexGrow: 1, fontSize: "14px", color: "#98A2B3" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default memo(UserOption);
