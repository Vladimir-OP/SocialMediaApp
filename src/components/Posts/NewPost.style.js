import styled from "styled-components";

const NewPostCont = styled.form(
  ({ openPost }) => `
  max-width: 31rem;
  border: 1px solid steelblue;
  padding: 1.875rem;
  border-radius: 5px;
  flex-direction: column;
  display: ${openPost ? "flex" : "none"};
  box-shadow: 0.625rem 0.625rem 5px #aaaaaa;
  border-radius: 5%; 
  background-color:white;
  margin-left:69rem
`
);

const NewPostHeader = styled.h1`
  font-size: 1.875rem;
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
  height: 2.5rem;
  margin: 5px;
  padding: 3px;
  font-size: 1.0625rem;
`;

const BodyContainer = styled.textarea`
  width: 100%;
  height: 7.5rem;
  margin: 5px;
  padding: 3px;
  font-size: 1.0625rem;
  resize: none;
`;

const NewPostBtn = styled.button`
  display: inline-block;
  background: steelblue;
  color: #fff;
  border: none;
  padding: 0.625rem 1.25rem;
  margin-left: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: inherit;
  right: 2.56rem;
  top: 28.5rem;
   
  :hover {
    background-color: white;
    color: black;
    border: 1px solid steelblue;
  }
`;

const MyPostsBtn = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 0.625rem 1.25rem;
  margin-left: 0.4rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  position: absolute;
  right: 66rem;
  top: 24.5rem;

  :hover {
    background-color: white;
    color: black;
    border: 1px solid steelblue;
  }
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
