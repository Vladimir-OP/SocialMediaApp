import styled from "styled-components";

const LogoutBtn = styled.button`
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
    right: 33rem;
    top: 2.5rem;
}
  :hover {
    background-color: white;
    color: black;
    border: 1px solid steelblue;
`;
export { LogoutBtn };
