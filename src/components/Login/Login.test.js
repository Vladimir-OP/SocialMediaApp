import Login from "./Login";
import * as router from "react-router";
import UserContextProvider from "../contexts/UserContext";
import { render, fireEvent, screen } from "@testing-library/react";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

function hasInputValue(e, inputValue) {
  return screen.getByDisplayValue(inputValue) === e;
}

test("test login", async () => {
  const email = "Sincere@april.biz";

  render(
    <UserContextProvider>
      <Login />
    </UserContextProvider>
  );

  const emailInput = screen.getByTestId("emailInput");

  fireEvent.change(emailInput, { target: { value: email } });

  expect(hasInputValue(emailInput, email)).toBe(true);
});
