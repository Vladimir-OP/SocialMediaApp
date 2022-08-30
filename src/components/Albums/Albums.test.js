import {  render, screen } from "@testing-library/react";
import UserContextProvider from "../contexts/UserContext";
import Albums from "./Albums";

const renderAlbums = () => {
  render(
    <UserContextProvider>
      <Albums />
    </UserContextProvider>
  );
};

const mockChildComponent = jest.fn();

jest.mock("../Album/Album", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

test("display albums", () => {
  renderAlbums();
  const result = screen.getByTestId("Albums");
  expect(result).toContainHTML("div")
});
