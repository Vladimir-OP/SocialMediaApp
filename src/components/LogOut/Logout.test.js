import { render, fireEvent, screen } from "@testing-library/react";
import Logout from "components/LogOut/Logout.jsx";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("Check navigation to login page and removing user from localstorage", async () => {
  render(<Logout />);

  fireEvent.click(screen.getByRole("button"));

  expect(localStorage.getItem("user")).toBe(null);
  expect(window.location.pathname).toBe("/");
});
