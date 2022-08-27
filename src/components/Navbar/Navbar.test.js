import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import UserContextProvider from "../contexts/UserContext";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("check navigation to user page", () => {
  render(
    <UserContextProvider>
      <Navbar />
    </UserContextProvider>
  );

  fireEvent.click(screen.getByTestId("BarItemUser"));
  expect(window.location.pathname).toEqual("/user");
});

test("check navigation to album page", () => {
  render(
    <UserContextProvider>
      <Navbar />
    </UserContextProvider>
  );

  fireEvent.click(screen.getByTestId("BarItemAlbum"));
  expect(window.location.pathname).toBe("/albums");
});

// test("navbar opening", () => {
//   render(
//     <UserContextProvider>
//       <Navbar />
//     </UserContextProvider>
//   );
//   const btn = screen.getByTestId("NavBar", { openNavBar: false });

//   fireEvent.change(btn, {
//     target: { value: false },
//   });

//   expect(screen.getByTestId("NavBar")).toBeInTheDocument();
// });

//   test("check  page", () => {
//     const btn = render(
//       <UserContextProvider>
//         <Navbar />
//       </UserContextProvider>
//     ).queryByTestId("BarItemAlbum");

//     fireEvent.click(screen.getByTestId("BarItemAlbum"));
//     expect().toBe("/albums");
//   });
