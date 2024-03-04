import { createSlice } from "@reduxjs/toolkit";

type State = {
  isRegisterCompleted: boolean;
  progress: number;
};

const initialState: State = {
  isRegisterCompleted: false,
  progress: 0,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: "ui",
  reducers: {
    setIsRegisterCompleted(state) {
      state.isRegisterCompleted = true;
    },
    setProgress(state, { payload }) {
      state.isRegisterCompleted = payload;
    },
  },
});

export { actions, name, reducer };
