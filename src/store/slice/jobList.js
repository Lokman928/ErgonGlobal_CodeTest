import { createSlice } from "@reduxjs/toolkit";

export const jobListSlice = createSlice({
  name: "jobList",
  initialState: {
    jobList: [],
    counter: 0
  },
  reducers: {
    updateJobList: (state, action) => {
      state.jobList = action.payload;
    }
  },
});

export const selectJobList = (state) => state.jobList;
export const { updateJobList } = jobListSlice.actions;
export default jobListSlice.reducer;