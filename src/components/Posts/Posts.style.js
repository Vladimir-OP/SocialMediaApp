import styled from "styled-components";
const PostBtn = styled.button`
display: inline-block;
    background: #007cfc;
    color: #fff;
    border: none;
    /* padding: 0%; */
    border-radius: 50%;
    cursor: pointer;
    -webkit-text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 37px;
    font-family: inherit;
    position: absolute;
    right: 5rem;
    width: 45px;
    height: 45px;
   
   
}
 :hover {
   background-color: white;
   color: black;
   border: 1px solid steelblue;
`;
const PostsCont = styled.div`
  background-color: white;
  max-width: 500px;
  margin: 30px auto;
  overflow-x: none;
  min-height: auto;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
`;

const UserName = styled.h1`
  color: rgb(42, 98, 143);
  width: 25rem;
  margin-left: 5rem;
`;

export { PostsCont, UserName, PostBtn };
