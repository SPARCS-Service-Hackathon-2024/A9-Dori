import { css } from "@emotion/react";

const AdaptivehorizontalScroll = ({ children, ...divProps }) => {
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      `}
      {...divProps}
    >
      <div
        css={css`
          padding: 0 20px 0 max(calc(50% - 768px / 2), 20px);
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default AdaptivehorizontalScroll;

`
@media (max-width: 788px) {
  padding: 0 20px;
}`;
