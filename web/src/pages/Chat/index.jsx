import { Link } from "react-router-dom";
import AdaptiveCenterDiv from "../../components/AdaptiveDiv/AdaptiveCenterDiv";
import Footer from "../../components/Footer";

import imgExample from "./imgExample.png";

const Chat = () => {
  return (
    <>
      <div css={{ height: "50px" }} />
      <AdaptiveCenterDiv>
        <Link to="/chat/talk">
          <img src={imgExample} alt="chat" css={{ width: "100%" }} />
        </Link>
      </AdaptiveCenterDiv>
      <Footer />
    </>
  );
};

export default Chat;
