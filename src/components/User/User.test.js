import { render } from "@testing-library/react";
import User from "./User";
import UserContextProvider from "../contexts/UserContext";

test("check is correct user taken from localstorage", () => {
  render(
    <UserContextProvider>
      <User />
    </UserContextProvider>
  );
  expect(localStorage.getItem("user")).toBeTruthy();
});
