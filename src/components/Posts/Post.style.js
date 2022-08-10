import styled from "styled-components";

const PostContainer = styled.div`
  background: white;
  border: 1px solid steelblue;
  margin: 5px;
  padding: 10px 20px;
  width: 50rem;
  margin-left: auto;
  margin-right: auto;

  > div {
    border: 4px double steelblue;
    width: 46rem;
    > h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    > p {
      color: steelblue;
    }
  }
`;

const PostTitle = styled.h3`
  color: rgb(42, 98, 143);
  text-decoration: underline 2px;
`;
const PostBody = styled.p``;
const CommentBtn = styled.span`
  cursor: pointer;
  color: gray;
  :hover {
    color: steelblue;
  }
`;

export { PostContainer, PostTitle, PostBody, CommentBtn };
