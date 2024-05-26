import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getTime } from "../../utils/getTime";

const initialState = {
  dataList: [
    {
      id: uuid(),
      hour: getTime(),
      text: "새로운 메모",
      textareaValue: "",
      isClicked: true,
    },
  ],
};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    createMemo: (state, action) => {
      const newDataList = [action.payload, ...state.dataList];
      state.dataList = newDataList.map((item) =>
        item.id === action.payload.id
          ? { ...item, isClicked: true }
          : { ...item, isClicked: false }
      );
    },
    updateMemo: (state, action) => {
      state.dataList = action.payload;
    },
    deleteMemo: (state, action) => {
      state.dataList = action.payload;
    },
    focusMemo: (state, action) => {
      const memos = state.dataList.map((item) => {
        console.log("action.payload", action.payload.id);
        if (item.id !== action.payload.id) {
          return { ...item, isClicked: false };
        } else {
          return { ...item, isClicked: true };
        }
      });
      state.dataList = memos;
    },
  },
});

export const { createMemo, updateMemo, deleteMemo, focusMemo } =
  memoSlice.actions;

export default memoSlice.reducer;
