import { forwardRef } from "react";
import { css } from "@emotion/react";

const AdaptiveHorizontalScroll = ({ children, ...divProps }, ref) => {
  return (
    <div
      css={css`
        display: flex;
        position: relative;
        overflow-x: auto;
        overflow-y: visible;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      `}
      ref={ref}
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

export default forwardRef(AdaptiveHorizontalScroll);
