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

const NewPostCont = styled.form`
  max-width: 500px;
  margin: 30px auto;
  min-height: 350px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

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
   right: 41rem;
   top: 24.5rem;
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
  PostBtn,
  NewPostCont,
  NewPostHeader,
  InputName,
  NewPostBtn,
};
