import { useDispatch, useSelector } from "react-redux";
import { focusMemo } from "../../redux/slices/memo.slice";
import { Li } from "./MemoListItem.styled";

function MemoListItem({ memo }) {
  console.log("memo", memo);
  const selector = useSelector((state) => state.memo.selectedId);
  const dispatch = useDispatch();
  const title = memo.text.trim().length > 0 ? memo.text.trim() : "새로운 메모";
  const date = memo.hour;
  const clickMemo = () => {
    const action = { type: focusMemo, payload: memo };
    dispatch(action);
  };

  return (
    <Li onClick={clickMemo}>
      <span>{title}</span>
      <span>{date}</span>
    </Li>
  );
}

export default MemoListItem;
