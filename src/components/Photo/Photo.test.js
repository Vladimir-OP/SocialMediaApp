import { fireEvent, render, screen } from "@testing-library/react";
import Photo from "./Photo";

const renderPhoto = () => {
  render(<Photo photo={data} />);
};

const data = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

test("image info appearance", () => {
  renderPhoto();
  fireEvent.mouseEnter(screen.getByTestId("photo"));
  const result = screen.getByTestId("photoInfo");
  expect(screen.getByText(data.title, result)).toBeTruthy();
});
