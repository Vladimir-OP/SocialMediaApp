import styled from "styled-components";

const PhotoCont = styled.div`
  margin: 13px;
  padding: 0.625rem 1.25rem;
  width: 15rem;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  justify-items: space-between;
  font-size: 1rem;
`;

const PhotoInfoCont = styled.div`
  padding: 26px;
  width: 15rem;
  height: 2.5rem;
  color: white;
  margin-top: 5rem;
  display: flex;
  text-align: center;
  font-size: larger;
  justify-content: center;
`;
const BlackField = styled.div(
  ({ openInfo }) => `
  width: 18rem;
  background: rgb(0 0 0 / 40%);
  height: ${openInfo ? "18rem" : "0"};
  transition: height 0.3s ease-out;
  overflow: hidden;
  position:absolute;
  
`
);

const AlbumPhoto = styled.img``;

export { PhotoCont, AlbumPhoto, PhotoInfoCont, BlackField };
