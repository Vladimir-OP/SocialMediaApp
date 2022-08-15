import styled from "styled-components";

const PostContainer = styled.div`
  margin: 5px;
  padding: 0.625rem 1.25rem;
  width: 50rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;

  > div {
    flex-wrap: unset;
    flex-direction: column;
    border-radius: 5%;
    background-color: white;
    border: unset;
    box-shadow: 10px 10px 5px #aaaaaa;
    width: 19rem;

    > h3 {
      display: flex;
    }

    > p {
      font-color: black;
      font-size: 11px;
      border-bottom: 1px solid black;
    }

    > div {
      font-size: small;
    }
  }
`;

const PostTitle = styled.h4`
  color: rgb(42, 98, 143);
  margin-left: 2rem;
`;

const PostBody = styled.h6``;

const CommentBtn = styled.i`
  display: flex;
  width: 1rem;
  position: relative;
  cursor: pointer;
  color: gray;
  left: 17rem;
  
  :hover {
    color: steelblue;
  }
`;

const CommentCount = styled.span`
  width: 1rem;
`;

export { CommentCount, PostContainer, PostTitle, PostBody, CommentBtn };
