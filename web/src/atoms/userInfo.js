import { atom } from "recoil";

const userInfoAtom = atom({
  key: "userInfoAtom",
  default: undefined,
});

export default userInfoAtom;
