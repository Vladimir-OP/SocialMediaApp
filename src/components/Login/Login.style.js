import styled from "styled-components";

const LoginForm = styled.form`
  background: white;
  max-width: 32rem;
  margin: 1.8rem auto;
  overflow-x: none;
  min-height: 300px;
  padding: 1.875rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 16px #e3e3e3;
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
  width: 31rem%;
  height: 2.5rem;
  margin: 0.25rem 0;
  padding: 0 0.5rem;
  font-size: 1rem;
  border: 1px solid #e3e3e3;
  border-radius: 0.25rem;

  :hover {
    border: 1px solid steelblue;
  }

  :focus {
    outline: none !important;
  }
`;

const LoginBtn = styled.button`
  display: inline-block;
  background: steelblue;
  color: #fff;
  border: none;
  padding: 0.625rem 1.25rem;
  margin-top: 4rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-family: inherit;
  width: 5rem;

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
