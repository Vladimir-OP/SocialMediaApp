import styled from "styled-components";

const PhotosCont = styled.div`
  margin: 13px;
  padding: 0.625rem 1.25rem;
  width: 89rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: 14rem;
  height: fit-content;
  min-height: 10rem;
  max-height: 50rem;
  justify-items: space-between;

  > div {
    flex-wrap: unset;
    flex-direction: column;
    border-radius: 0.75rem;
    border: unset;
    width: 18rem;
    justify-content: unset;
  }
`;

export { PhotosCont };
