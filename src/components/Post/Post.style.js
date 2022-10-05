import styled from "styled-components";

const PostContainer = styled.div`
  margin: 13px;
  padding: 0.625rem 1.25rem;
  width: 50rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  min-height: 10rem;
  max-height: 50rem;
  justify-items: space-between;

  > div {
    flex-wrap: unset;
    flex-direction: column;
    border-radius: 0.75rem;
    background-color: white;
    border: unset;
    box-shadow: 1px 1px 16px #e3e3e3;
    width: 19rem;
    justify-content: unset;

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
      box-shadow: unset;
      background: none;
    }
  }
`;
const PostHeader = styled.div`
  align-items: flex-start;
  width: 20rem !important;
  display: flex;
  flex-direction: row !important;
  margin-top: 1rem;
`;

const PostTitle = styled.h4`
  color: rgb(42, 98, 143);
  margin: unset;
  width: 17rem;
`;

const PostBody = styled.h6``;

const CommentBtn = styled.i`
  display: flex;
  width: 1rem;
  cursor: pointer;
  color: gray;
  left: 17rem;

  :hover {
    color: steelblue;
  }
`;

const CommentCount = styled.span`
  width: 1rem;
  display: flex;
  margin-left: 0.85rem;
`;

export {
  CommentCount,
  PostHeader,
  PostContainer,
  PostTitle,
  PostBody,
  CommentBtn,
};
