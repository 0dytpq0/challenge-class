import { useDispatch, useSelector } from "react-redux";
import { focusMemo } from "../../redux/slices/memo.slice";
import { formatDateTime } from "../../utils/getTime";
import { Li } from "./MemoListItem.styled";

function MemoListItem({ memo }) {
  const selectedMemoId = useSelector((state) => state.memo.selectedId);
  const dispatch = useDispatch();
  const title = memo.text.trim().length > 0 ? memo.text.trim() : "새로운 메모";
  const date = memo.hour;

  const clickMemo = () => {
    const action = { type: focusMemo, payload: memo };
    dispatch(action);
  };

  // $를 왜붙힘? 스타일링 목적으로 스타일 컴포넌트에 전달되고 있음을 나타내는 규칙
  return (
    <Li $isSelected={selectedMemoId === memo.id} onClick={clickMemo}>
      <span>{title}</span>
      <span>{formatDateTime(date, "short")}</span>
    </Li>
  );
}

export default MemoListItem;
