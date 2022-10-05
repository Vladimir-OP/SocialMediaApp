import { render, fireEvent, screen } from "@testing-library/react";
import * as router from "react-router";
import Navbar from "./Navbar";
import UserContextProvider from "../contexts/UserContext";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

test("check navigation to user page", () => {
  render(
    <UserContextProvider>
      <Navbar />
    </UserContextProvider>
  );

  fireEvent.click(screen.getByTestId("BarItemUser"));
  expect(navigate).toHaveBeenCalledWith("/user");
});

test("check navigation to album page", () => {
  render(
    <UserContextProvider>
      <Navbar />
    </UserContextProvider>
  );

  fireEvent.click(screen.getByTestId("BarItemAlbum"));
  expect(navigate).toHaveBeenCalledWith("/albums");
});

