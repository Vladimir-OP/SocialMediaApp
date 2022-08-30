import { fireEvent, render, screen } from "@testing-library/react";
import Post from "./Post";
import UserContextProvider from "../contexts/UserContext";
import Comments from "../Comments/Comments";

const mockChildComponent = jest.fn();

jest.mock("../Comments/Comments", () => (props) => {
  mockChildComponent(props);

  return <mock-childComponent />;
});
const data = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};
const renderPost = () => {
  render(
    <UserContextProvider>
      <Post post={data} />
    </UserContextProvider>
  );
};

test("check comments opening", () => {
  renderPost();
  jest.fn(<Post />);
  render(<Comments />);

  fireEvent.click(screen.getByTestId("commentBtn"));
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      show: true,
    })
  );
  fireEvent.click(screen.getByTestId("commentBtn"));
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      show: false,
    })
  );
}); 
