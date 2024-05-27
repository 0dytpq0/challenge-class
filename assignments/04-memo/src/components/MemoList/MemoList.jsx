import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMemo } from "../../redux/slices/memo.slice";
import MemoListItem from "../MemoListItem/MemoListItem";
import { MemoItems } from "../MemoListItem/MemoListItem.styled";
import { ButtonBox, MemoLists } from "./MemoList.styled";

function MemoList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.memo.dataList);

  const clickDelete = (e) => {
    e.preventDefault();
    if (selector.length === 1) alert("하나 이상의 메모는 남겨 두어야 합니다.");
  };

  const handleCreateMemo = (e) => {
    e.preventDefault();
    const action = {
      type: createMemo,
    };

    // setCurMemo(memoId);
    // setTextareaValue("");
    dispatch(action);
  };

  const memos = useMemo(
    () => selector.map((item) => <MemoListItem key={item.id} memo={item} />),
    [selector]
  );

  return (
    <>
      <MemoLists>
        <ButtonBox>
          <button onClick={handleCreateMemo}>새 메모 작성하기</button>
          <button onClick={clickDelete}>삭제</button>
        </ButtonBox>
        <MemoItems>{memos}</MemoItems>
      </MemoLists>
    </>
  );
}

export default MemoList;
