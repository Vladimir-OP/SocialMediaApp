import styled from "styled-components";
const LoginForm = styled.form`
  background: white;
  max-width: 500px;
  margin: 1.8rem auto;
  overflow-x: none;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 1.875rem;
  border-radius: 15%;
`;
const LoginHeader = styled.h1`
  color: steelblue;
  font-size: 30px;
`;

const LoginInputName = styled.label`
  color: steelblue;
  display: block;
`;

const InputContainer = styled.input`
  width: 100%;
  height: 2.5rem;
  margin: 5px;
  padding: 3px;
  font-size: 17px;
`;

const LoginBtn = styled.button`
  display: inline-block;
  background: steelblue;
  color: #fff;
  border: none;
  padding: 0.625rem 1.25rem;
  margin-top: 4rem;
  margin-left: 0.4rem;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  :hover {
    background-color: white;
    color: black;
    border-color: red;
    border: 1px solid steelblue;
  }
`;

const WrongEmail = styled.p(
  ({ showWrongEmail }) => `
 display:${showWrongEmail ? "block" : "none"};
color:red;
margin:unset
`
);

export {
  WrongEmail,
  LoginHeader,
  LoginForm,
  LoginInputName,
  InputContainer,
  LoginBtn,
};
