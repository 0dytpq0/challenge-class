import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialMemoId = uuid();
const initialState = {
  dataList: [
    {
      id: initialMemoId,
      hour: Date.now(),
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
        hour: Date.now(),
        text: "",
      };

      state.dataList = [newMemo, ...state.dataList];
      state.selectedId = newMemo.id;
    },
    updateMemo: (state, action) => {
      state.dataList.find((memo) => memo.id === action.payload.memoId).text =
        action.payload.text;
    },
    deleteMemo: (state, action) => {
      state.dataList = state.dataList.filter(
        (memo) => memo.id !== action.payload
      );
    },
    focusMemo: (state, action) => {
      state.selectedId = action.payload.id;
    },
  },
});

export const { createMemo, updateMemo, deleteMemo, focusMemo } =
  memoSlice.actions;

export default memoSlice.reducer;
