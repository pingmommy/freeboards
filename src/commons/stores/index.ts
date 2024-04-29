import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoggedState = atom({
  key: "isLoggedState",
  default: true,
});
