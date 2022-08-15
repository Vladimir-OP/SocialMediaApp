import styled from "styled-components";

const PostBtn = styled.button`
  display: inline-block;
  background: #007cfc;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: inherit;
  position: absolute;
  right: 5rem;
  width: 45px;
  height: 45px;

  :hover {
    background-color: white;
    color: black;
    border: 1px solid steelblue;
  }
`;

const PostsCont = styled.div`
  background-color: white;
  max-width: 31.25rem;
  margin: 1.875 auto;
  overflow-x: none;
  min-height: auto;
  border: 1px solid steelblue;
  padding: 1.875rem;
  border-radius: 5px;
`;

const UserName = styled.h1`
  color: rgb(42, 98, 143);
  width: 25rem;
  margin-left: 5rem;
`;

export { PostsCont, UserName, PostBtn };
