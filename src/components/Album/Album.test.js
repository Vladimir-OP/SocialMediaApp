import { fireEvent, render, screen } from "@testing-library/react";
import UserContextProvider from "../contexts/UserContext";
import Album from "./Album";
import * as router from "react-router";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});

const renderAlbum = () => {
  render(
    <UserContextProvider>
      <Album album={data} />
    </UserContextProvider>
  );
};

const data = {
  userId: 1,
  id: 1,
  title: "quidem molestiae enim",
};

test("onClick navigation to pictures page", () => {
  renderAlbum();
  fireEvent.click(screen.getByTestId("Album"));
  expect(navigate).toHaveBeenCalledWith("/photos");
});
