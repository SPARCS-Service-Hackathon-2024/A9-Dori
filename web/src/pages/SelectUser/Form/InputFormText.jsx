import { css } from "@emotion/react";

const InputFormText = ({ onChangeValue, ...inputProps }) => {
  return (
    <input
      css={[
        {
          background: "#F9FAFB",
          fontSize: "14px",
          fontWeight: 600,
          color: "#344054",
          padding: "7px 17px",
          boxSizing: "border-box",
        },
        css`
          &::placeholder {
            color: #98a2b3;
          }
        `,
      ]}
      onChange={(e) => onChangeValue(e.target.value)}
      {...inputProps}
    />
  );
};

export default InputFormText;
