import { post } from "./Api";

export const loginUser = (userName, password) => {
  return post("/login", { userName, password });
};
