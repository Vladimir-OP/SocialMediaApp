import { renderHook } from "@testing-library/react";
import { fireEvent, render, screen } from "@testing-library/react";
import UserContextProvider from "../contexts/UserContext";
import NewPost from "../NewPost/NewPost";
import Posts from "./Posts";

const renderPosts = () => {
  render(
    <UserContextProvider>
      <Posts />
    </UserContextProvider>
  );
};

const mockChildComponent = jest.fn();

jest.mock("../NewPost/NewPost", () => (props) => {
  mockChildComponent(props);

  return <mock-childComponent />;
});

test("Opens NewPost field", () => {
  renderPosts();
  render(<NewPost />);

  const { result } = renderHook(() => (
    <UserContextProvider>Posts()</UserContextProvider>
  ));

  expect(result.current.openNewPost).toBeFalsy();

  fireEvent.click(screen.getByTestId("PostBtn"));

  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      openNewPost: true,
    })
  );
});

test("display posts", () => {
  renderPosts();
  const result = screen.getByTestId("postContainer");
  expect(result).toContainHTML("div");
});
