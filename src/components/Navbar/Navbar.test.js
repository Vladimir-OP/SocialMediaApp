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
