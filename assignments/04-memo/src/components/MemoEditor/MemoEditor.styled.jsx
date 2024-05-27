import styled from "styled-components";

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  span {
    color: rgb(128, 128, 128);
    font-size: 10px;
    margin: 0px auto 24px;
  }
  textarea {
    all: unset;
    flex-grow: 1;
    font-size: 15px;
    line-height: 1.66;
  }
`;
