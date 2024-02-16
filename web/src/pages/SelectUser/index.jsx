import { memo, useState } from "react";

import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Profile from "./Profile";
import Success from "./Success";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const SelectUser = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("profile");

  useBackgroundColorEffect();
  return (
    <>
      {page == "profile" && (
        <Profile onBack={() => navigate(-1)} onNext={() => setPage("form")} />
      )}
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

export default memo(SelectUser);
