import { fireEvent, render, screen } from "@testing-library/react";
import UserContextProvider from "../contexts/UserContext";
import Album from "./Album";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

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

test("onClick navigation to pictures page",()=>{
    renderAlbum();
    const albumBtn = screen.getByTestId("Album");
    fireEvent.click(albumBtn)
    expect(window.location.pathname).toMatch("/photos")
})