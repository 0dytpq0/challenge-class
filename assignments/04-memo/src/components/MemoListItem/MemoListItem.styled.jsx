import styled from "styled-components";

export const MemoItems = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;
`;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  height: 56px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.clicked ? "rgb(255, 224, 127);" : "rgb(255,255,255)"};
  width: 100%;
  padding: 12px 24px;
  cursor: pointer;

  span:first-child {
    margin: 0px 0px 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  span:last-child {
    font-size: 12px;
    color: rgb(64, 64, 64);
  }
`;
