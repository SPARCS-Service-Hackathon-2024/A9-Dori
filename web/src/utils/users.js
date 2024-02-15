import { getCookie, setCookie } from "./cookie";

const generateRandomHash = (length = 24) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getUsers = () => {
  const _users = getCookie("users");
  if (!_users) return [];
  return JSON.parse(_users);
};

export const createUser = (user) => {
  const users = getUsers();
  users.push({ ...user, id: generateRandomHash() });
  setCookie("users", JSON.stringify(users), 1);
};

export const findUser = (email) => {
  const users = getUsers();
  return users.find((user) => user.email === email);
};

export const getLoginedUser = () => {
  const _userInfo = getCookie("userInfo");
  if (!_userInfo) return null;
  const userInfo = JSON.parse(_userInfo);
  if (!userInfo) return null;
  return userInfo;
};

export const setLoginedUser = (user) => {
  setCookie("userInfo", JSON.stringify(user), 1);
};
