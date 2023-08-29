import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: localStorage.getItem("nameTrainer") ?? "",
};

const trainerSlice = createSlice({
  initialState,
  name: "trainer",
  reducers: {
    loginTrainer: (state, action) => {
      const newName = action.payload;
      localStorage.setItem("nameTrainer", newName);
      state.name = newName;
    },
    logOut: (state) => {
      state.name = "";
      localStorage.removeItem("nameTrainer");
    },
  },
});

export const { loginTrainer, logOut } = trainerSlice.actions;

export default trainerSlice.reducer;
