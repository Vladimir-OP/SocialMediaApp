import styled from "styled-components";

const PostContainer = styled.div`
  background: #cde1be;
  margin: 5px;
  padding: 10px 20px;
  width: 50rem;

  > div {
    background:white;
    border: 2px solid black;
    width:46rem;
    > h3 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const PostTitle = styled.h3``;
const PostBody = styled.p``

export { PostContainer, PostTitle,PostBody };
