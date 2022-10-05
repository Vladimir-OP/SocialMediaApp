import { render, screen } from "@testing-library/react";
import Photos from "./Photos";
import UserContextProvider from "../contexts/UserContext";

test("Photos dsiplaying", () => {
  render(
    <UserContextProvider>
      <Photos/>
    </UserContextProvider>
  );
  const result = screen.getByTestId("photos");
  expect(result).toContainHTML("div");
});
