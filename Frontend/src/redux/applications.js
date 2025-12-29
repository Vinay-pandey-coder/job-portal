import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applicants: null,
  },
  reducers: {
    setAllApplicants: (state, acction) => {
      state.applicants = acction.payload;
    },
  },
});

export const { setAllApplicants } = applicationSlice.actions;

export default applicationSlice.reducer;

export const applicationSliceReducer = applicationSlice.reducer;

export { applicationSlice };