import { memo, useState } from "react";

import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Profile from "./Profile";
import Success from "./Success";
import Form from "./Form";

const SelectStudent = () => {
  const [page, setPage] = useState("profile");

  useBackgroundColorEffect();
  return (
    <>
      {page == "profile" && <Profile onNext={() => setPage("form")} />}
      {page == "form" && (
        <Form
          onNext={() => setPage("success")}
          onBack={() => setPage("profile")}
        />
      )}
      {page == "success" && <Success />}
    </>
  );
};

export default memo(SelectStudent);
