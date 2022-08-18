import styled from "styled-components";

const AlbumCont = styled.div`
  cursor: pointer;
  margin: 13px;
  padding: 0.625rem 1.25rem;
  width: 50rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 3rem;
  justify-items: space-between;
  font-size: 1rem;

  > div {
    flex-wrap: unset;
    flex-direction: column;
    border-radius: 0.75rem;
    background-color: white;
    border: unset;
    box-shadow: 1px 1px 16px #e3e3e3;
    width: 19rem;
    justify-content: unset;

    > h3 {
      display: flex;
    }

    > p {
      font-color: black;
      font-size: 11px;
      border-bottom: 1px solid black;
    }

    > div {
      font-size: small;
      box-shadow: unset;
    }
  }
`;
const AlbumTitle = styled.h4`
  color: rgb(42, 98, 143);
  margin: unset;
  width: 17rem;
`;
export { AlbumCont, AlbumTitle };
