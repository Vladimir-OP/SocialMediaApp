import styled from "styled-components";

const AlbumConteiner = styled.div(
  ({ openAlbum }) => `
display: ${openAlbum ? "block" : "none"}
`
);

const AlbumItemsCont = styled.div`
  margin: 13px;
  padding: 0.625rem 1.25rem;
  width: 93rem;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  min-height: 10rem;
  max-height: 50rem;
  justify-items: space-between;
  position: absolute;
  left: 10rem;
  top: 10rem;

  > div {
    flex-wrap: unset;
    flex-direction: column;
    border-radius: 0.75rem;
    background-color: white;
    border: unset;
    box-shadow: 1px 1px 16px #e3e3e3;
    width: 19rem;
    justify-content: unset;
  }
`;

export { AlbumConteiner, AlbumItemsCont };
