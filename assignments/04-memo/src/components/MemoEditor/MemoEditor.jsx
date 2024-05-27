import { useDispatch, useSelector } from "react-redux";
import { updateMemo } from "../../redux/slices/memo.slice";
import { getToday } from "../../utils/getTime";
import { Editor } from "./MemoEditor.styled";

function MemoEditor() {
  const selector = useSelector((state) => state.memo);
  const dispatch = useDispatch();

  const EditMemo = (e) => {
    let editedMemo = selector.dataList.filter(
      (memo) => memo.id === selector.selectedId
    );
    console.log("Date.now()", Date.now());
    editedMemo = { ...editedMemo[0], text: e.target.value };
    const action = { type: updateMemo, payload: editedMemo };
    dispatch(action);
  };
  return (
    <Editor>
      <span> {getToday()}</span>
      <textarea
        // value={textareaValue}
        onChange={EditMemo}
      />
    </Editor>
  );
}

export default MemoEditor;
