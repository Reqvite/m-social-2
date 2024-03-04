import { createSlice } from "@reduxjs/toolkit";

type State = {
  isRegisterCompleted: boolean;
};

const initialState: State = {
  isRegisterCompleted: false,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: "profile",
  reducers: {
    setIsRegisterCompleted(state) {
      state.isRegisterCompleted = true;
    },
  },
});

export { actions, name, reducer };
