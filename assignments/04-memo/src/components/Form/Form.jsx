import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import {
  createMemo,
  deleteMemo,
  focusMemo,
  updateMemo,
} from "../../redux/slices/memo.slice";
import { getTime, getToday } from "../../utils/getTime";

function Form() {
  const selector = useSelector((state) => state.memo.dataList);

  // const [memo, handleMemo, initializeMemo] = useInput("");
  const [curMemo, setCurMemo] = useState(selector[0].id);
  const [textareaValue, setTextareaValue] = useState("");
  const dispatch = useDispatch();

  const clickMemo = (memo) => {
    const action = { type: focusMemo, payload: memo };
    dispatch(action);

    memo.text === "새로운 메모"
      ? setTextareaValue("")
      : setTextareaValue(memo.textarea);
    setCurMemo(memo.id);
  };

  const clickDelete = (e) => {
    e.preventDefault();
    if (selector.length === 1) alert("하나 이상의 메모는 남겨 두어야 합니다.");
    let filteredMemoList = selector.filter((item) => item.id !== curMemo);
    filteredMemoList[0].text === "새로운 메모"
      ? setTextareaValue("")
      : setTextareaValue(filteredMemoList[0].textarea);

    filteredMemoList[0] = { ...filteredMemoList[0], isClicked: true };

    setCurMemo(filteredMemoList[0].id);

    const action = { type: deleteMemo, payload: filteredMemoList };
    dispatch(action);
  };

  const handleCreateMemo = (e) => {
    e.preventDefault();
    const memoId = uuid();
    const action = {
      type: createMemo,
      payload: {
        id: memoId,
        hour: getTime(),
        text: "새로운 메모",
        textareaValue: "",
        isClicked: true,
      },
    };

    setCurMemo(memoId);
    setTextareaValue("");
    dispatch(action);
  };

  const makeMemoList = () => {
    const memos = selector.map((item) => {
      return (
        <>
          {/* <MemoList clicked={item.isClicked}> */}
          <Li clicked={item.isClicked} onClick={() => clickMemo(item)}>
            <span>{item.text}</span>
            <span>{item.hour}</span>
          </Li>
          {/* </MemoList> */}
        </>
      );
    });

    return memos;
  };

  const changeTextarea = (e) => {
    const newMemoList = selector.map((item) => {
      return item.id === curMemo
        ? { ...item, textarea: e.target.value, text: e.target.value }
        : item;
    });
    const action = { type: updateMemo, payload: newMemoList };

    dispatch(action);
    setTextareaValue(e.target.value);
  };

  return (
    <Container>
      <LeftSide>
        <ButtonBox>
          <button onClick={handleCreateMemo}>새 메모 작성하기</button>
          <button onClick={clickDelete}>삭제</button>
        </ButtonBox>
        <MemoList>{makeMemoList()}</MemoList>
      </LeftSide>
      <RightSide>
        <span>{getToday()}</span>
        <textarea value={textareaValue} onChange={changeTextarea} />
      </RightSide>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: rgb(255, 255, 255);
  margin: 0px auto;
  width: 100%;
  max-width: 1024px;
  height: 500px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

const ButtonBox = styled.form`
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

const LeftSide = styled.div`
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

const RightSide = styled.div`
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

const MemoList = styled.ul`
  padding: 20px 12px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;
`;
const Li = styled.li`
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

export default Form;
