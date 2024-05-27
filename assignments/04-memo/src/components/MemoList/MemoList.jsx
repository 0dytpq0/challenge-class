import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMemo, deleteMemo } from "../../redux/slices/memo.slice";
import MemoListItem from "../MemoListItem/MemoListItem";
import { MemoItems } from "../MemoListItem/MemoListItem.styled";
import { ButtonBox, MemoLists } from "./MemoList.styled";

function MemoList() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.memo);
  const memos = selector.dataList;
  const selectedId = selector.selectedId;

  const clickDelete = (e) => {
    e.preventDefault();
    if (selector.dataList.length === 1)
      return alert("하나 이상의 메모는 남겨 두어야 합니다.");
    const action = deleteMemo(selectedId);
    dispatch(action);
  };

  const handleCreateMemo = (e) => {
    e.preventDefault();
    const action = createMemo();
    dispatch(action);
  };

  const sortedMemos = useMemo(
    () => [...memos].sort((memoA, memoB) => memoB.hour - memoA.hour),
    [memos]
  );
  const memosList = sortedMemos.map((item) => (
    <MemoListItem key={item.id} memo={item} />
  ));

  return (
    <>
      <MemoLists>
        <ButtonBox>
          <button onClick={handleCreateMemo}>새 메모 작성하기</button>
          <button onClick={clickDelete}>삭제</button>
        </ButtonBox>
        <MemoItems>{memosList}</MemoItems>
      </MemoLists>
    </>
  );
}

export default MemoList;
