import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getTime } from "../../utils/getTime";

const initialMemoId = uuid();
const initialState = {
  dataList: [
    {
      id: initialMemoId,
      hour: getTime(),
      text: "",
    },
  ],
  selectedId: initialMemoId,
};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    createMemo: (state) => {
      const newMemo = {
        id: uuid(),
        hour: getTime(),
        text: "",
      };

      state.dataList = [newMemo, ...state.dataList];
      state.selectedId = newMemo.id;
    },
    updateMemo: (state, action) => {
      const newMemos = state.dataList.map((memo) => {
        return memo.id === action.payload.id
          ? { ...memo, text: action.payload.text }
          : { ...memo };
      });
      state = {
        ...state,
        dataList: newMemos,
      };
    },
    deleteMemo: (state, action) => {
      const newDataList = state.dataList.filter(
        (memo) => memo.id !== action.payload.id
      );

      state.dataList = newDataList;
      state.selectedId = newDataList[0].id;
    },
    focusMemo: (state, action) => {
      state = { ...state, selectedId: action.payload.id };
      console.log("", action.payload);
    },
  },
});

export const { createMemo, updateMemo, deleteMemo, focusMemo } =
  memoSlice.actions;

export default memoSlice.reducer;
