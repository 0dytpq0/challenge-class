import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMemo } from "../../redux/slices/memo.slice";
import { formatDateTime } from "../../utils/getTime";
import { Editor } from "./MemoEditor.styled";

function MemoEditor() {
  const selector = useSelector((state) => state.memo);
  const selectedMemoId = selector?.selectedId;
  const selectedMemo = selector.dataList.find(
    (memo) => memo.id === selectedMemoId
  );
  const dispatch = useDispatch();
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.value = selectedMemo.text;
    }
  }, [selectedMemoId]);

  const EditMemo = (e) => {
    const text = e.target.value;
    const action = updateMemo({ memoId: selectedMemoId, text });
    dispatch(action);
  };

  return (
    <Editor>
      <span> {formatDateTime(selectedMemo?.hour, "long")}</span>
      <textarea ref={textareaRef} onChange={EditMemo} />
    </Editor>
  );
}

export default MemoEditor;
