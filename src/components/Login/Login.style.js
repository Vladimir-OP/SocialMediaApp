import styled from "styled-components";
const LoginForm = styled.form`
  background: white;
  max-width: 500px;
  margin: 30px auto;
  overflow-x: none;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
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
  height: 40px;
  margin: 5px;
  padding: 3px;
  font-size: 17px;
`;

const LoginBtn = styled.button`
  display: inline-block;
  background: steelblue;
  color: #fff;
  border: none;
  padding: 10px 20px;
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

export { LoginHeader, LoginForm, LoginInputName, InputContainer, LoginBtn };
