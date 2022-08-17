import styled from "styled-components";

const CommentBody = styled.p`
  width: 15rem;
  color: grey;
  font-size: 11px;
`;

const CommentName = styled.a(
  ({ color }) => `
  font-size: 15px;
  color: white !important;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  background-color: ${color};
  display:flex;
  justify-content:center;
  margin-top: 0.8rem;
  ;
`
);

const CommentCont = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export { CommentBody, CommentName, CommentCont };
