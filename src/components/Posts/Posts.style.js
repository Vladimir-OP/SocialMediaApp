import styled from "styled-components";
const PostBtn = styled.button`
display: inline-block;
   background: #000;
   color: #fff;
   border: none;
   padding: 10px 20px;
   margin-left: 0.4rem;
   border-radius: 5px;
   cursor: pointer;
   -webkit-text-decoration: none;
   text-decoration: none;
   font-size: 15px;
   font-family: inherit;
   position: absolute;
   right: 40rem;
   top: 2.5rem;
}
 :hover {
   background-color: white;
   color: black;
   border: 1px solid steelblue;
`;
const PostsCont = styled.div`
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
  margin: none;
`;

export { PostsCont, UserName, PostBtn };
