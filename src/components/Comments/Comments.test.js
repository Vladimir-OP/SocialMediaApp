import Comments from "./Comments";
import { render, screen } from "@testing-library/react";
import UserContextProvider from "../contexts/UserContext";

const renderComments = (showValue) => {
  render(
    <UserContextProvider>
      <Comments show={showValue} postID={5} />
    </UserContextProvider>
  );
};

const data = {
  postId: 5,
  show: true,
};

test("opens comments", () => {
  renderComments(true);
  const result = screen.getByTestId("Comments");
  expect(result).toContainHTML("div");
});

test("Comments button is not pressed", () => {
  renderComments(false);
  const result = screen.getByTestId("globalCont");
  expect(result).toBeEmptyDOMElement();
});
