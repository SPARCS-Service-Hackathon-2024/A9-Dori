import { css } from "@emotion/react";
import Container from "../Container";

const FormInputText = ({ value, onChangeValue, ...inputProps }) => {
  return (
    <Container
      css={{
        boxSizing: "border-box",
        padding: "16px",
      }}
    >
      <input
        value={value}
        onChange={(e) => onChangeValue?.(e.target.value)}
        placeholder="입력해주세요"
        css={[
          {
            width: "100%",
            fontSize: "14px",
            fontWeight: 600,
            color: "#344054",
          },
          css`
            &::placeholder {
              color: #98a2b3;
            }
          `,
        ]}
        {...inputProps}
      />
    </Container>
  );
};

export default FormInputText;
