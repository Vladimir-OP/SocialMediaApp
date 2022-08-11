import styled from "styled-components";

const NewPostCont = styled.form(
  ({ openPost }) => `
  max-width: 500px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  flex-direction: column;
  display: ${openPost ? "flex" : "none"};
  box-shadow: 10px 10px 5px #aaaaaa;
  border-radius: 5%; 
  background-color:white;
  margin-left:69rem
`
);

const NewPostHeader = styled.h1`
  font-size: 30px;
  margin-left: 7rem;
  color: steelblue;
`;

const InputName = styled.label`
  display: block;
  color: steelblue;
  margin-left: 4px;
`;

const TitleInputContainer = styled.input`
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px;
  font-size: 17px;
`;

const BodyContainer = styled.textarea`
  width: 100%;
  height: 120px;
  margin: 5px;
  padding: 3px;
  font-size: 17px;
  resize: none;
`;

const NewPostBtn = styled.button`
display: inline-block;
   background: steelblue;
   color: #fff;
   border: none;
   padding: 10px 20px;
   margin-left: 1.1rem;
   border-radius: 5px;
   cursor: pointer;
   -webkit-text-decoration: none;
   text-decoration: none;
   font-size: 15px;
   font-family: inherit;
   right: 41rem;
   top: 28.5rem;
   
}
 :hover {
   background-color: white;
   color: black;
   border: 1px solid steelblue;
`;

const MyPostsBtn = styled.button`
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
   right: 66rem;
   top: 24.5rem;
}
 :hover {
   background-color: white;
   color: black;
   border: 1px solid steelblue;
`;
export {
  TitleInputContainer,
  MyPostsBtn,
  BodyContainer,
  NewPostCont,
  NewPostHeader,
  InputName,
  NewPostBtn,
};
