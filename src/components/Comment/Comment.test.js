import { render, screen } from "@testing-library/react";
import Comment from "./Comment";

const renderComment = () => {
  render(<Comment post={data} />);
};

const data = {
  postId: 1,
  id: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
};

test("is Commetns displayed in page",()=>{
    renderComment();
    const commentCont = screen.getByTestId("Comment");
    expect(commentCont).toContainHTML("div");
    const  commentName = screen.getByTestId("CommentName");
    expect(commentName).toContainHTML("a")
});

