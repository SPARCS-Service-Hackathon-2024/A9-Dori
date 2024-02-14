import useBackgroundColorEffect from "../../hooks/useBackgroundColorEffect";
import Header from "./Header";
import Profile from "./Profile";

const SelectUser = () => {
  useBackgroundColorEffect();
  return (
    <>
      <Header />
      <Profile />
    </>
  );
};

export default SelectUser;
