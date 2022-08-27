import styled from "styled-components";

const CreatePostCont = styled.div(
  ({ openNewPost }) => `
  left:0rem;
  overflow: hidden;
  display: ${openNewPost ? "block" : "none"};
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(60 82 113 / 70%);
  z-index: 100;
  `
);

const NewPostCont = styled.form`
  align-items: center;
  max-width: 31rem;
  margin-top: 15rem;
  padding: 1.875rem;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  border-radius: 0.75rem;
  background-color: white;
  margin-left: 41rem;
  overflow: hidden;
`;

const NewPostHeader = styled.h1`
  font-size: 1.875rem;
  color: steelblue;
`;

const InputName = styled.label`
  display: block;
  color: steelblue;
  margin-left: 4px;
  margin-right: 30rem;
`;

const TitleInputContainer = styled.input`
  width: 31rem;
  height: 2.5rem;
  margin: 4px;
  margin-bottom: 8px;
  padding: 3px;
  font-size: 1.0625rem;
`;

const BodyContainer = styled.textarea`
  width: 100%;
  height: 7.5rem;
  margin: 5px;
  margin-bottom: 13px;
  padding: 3px;
  font-size: 1.0625rem;
  resize: none;
`;

const NewPostBtn = styled.button`
  display: inline-block;
  background: steelblue;
  color: #fff;
  padding: 0.625rem 1.25rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: inherit;
  right: 2.56rem;
  top: 28.5rem;
  width: 31.5rem;
  border: 1px solid steelblue;

  :hover {
    background-color: white;
    color: black;
  }
`;

export {
  CreatePostCont,
  TitleInputContainer,
  BodyContainer,
  NewPostCont,
  NewPostHeader,
  InputName,
  NewPostBtn,
};
