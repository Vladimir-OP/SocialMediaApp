import styled from "styled-components";

const CommentBody = styled.p`
  height: 5rem;
  width: 15rem;
  color: grey;
  font-size:11px
`;

const CommentName = styled.a(
  ({color})=>`
  font-size: 15px;
  color: white !important;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: ${color};
  display:flex;
  justify-content:center;
  margin-top: 0.8rem;
  margin-left: 0.3rem
  ;
`);

const CommentCont = styled.div`
  display: flex;
  justify-content: space-between;
  height:5.2rem;
  border-bottom: 1px solid black;
  border-radius:10%
`;


export { CommentBody, CommentName, CommentCont };
