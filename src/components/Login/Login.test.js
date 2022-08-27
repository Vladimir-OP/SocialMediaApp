// import Login from "./Login";
// import { api } from "../../shared/api";
// import UserContextProvider from "../contexts/UserContext";
// import { render, fireEvent, screen } from "@testing-library/react";

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => jest.fn(),
// }));

// test("test login", async () => {
//   let x = await api("GET",'users');
//   const { container } = render(
//     <UserContextProvider>
//       <Login />
//     </UserContextProvider>
//   );
//   fireEvent.click(screen.getByTestId("Login"), new MouseEvent("click"));

//   expect(window.location.pathname).toBe("/user");
// });
