import styled from "styled-components";

export const ButtonBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;

  > button {
    all: unset;
    font-size: 13px;
    font-weight: 500;
    background-color: rgb(255, 255, 255);
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    padding: 4px 8px;

    &:hover {
      color: rgb(18, 18, 18);
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const MemoLists = styled.div`
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;
