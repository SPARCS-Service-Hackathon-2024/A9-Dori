import { memo } from "react";
import Bottom from "./Bottom";
import Top from "./Top";
import AdaptiveCenterDiv from "../../../components/AdaptiveDiv/AdaptiveCenterDiv";

import example from "./example.png";

const Talk = () => {
  return (
    <>
      <Top />
      <div css={{ position: "fixed", bottom: "100px", left: 0, width: "100%" }}>
        <AdaptiveCenterDiv
          css={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src={example} alt="chat" css={{ maxWidth: "100%" }} />
        </AdaptiveCenterDiv>
      </div>
      <Bottom />
    </>
  );
};

export default memo(Talk);
