import styled from "styled-components";

const AlbumCont = styled.div`
  align-items: center;
  cursor: pointer;
  margin: 13px;
  padding: 0.625rem 1.25rem;
  width: 50rem;
  display: flex;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  flex-direction: row;
`;
const AlbumTitle = styled.h4`
  margin-right: 0.5rem;
  color: rgb(42, 98, 143);
  width: 17rem;
`;

const AlbumIcon = styled.i`
  color: steelblue;
`;
export { AlbumCont, AlbumTitle, AlbumIcon };
