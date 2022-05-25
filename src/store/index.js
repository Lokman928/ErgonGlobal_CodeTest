import { configureStore } from "@reduxjs/toolkit";
import jobListSlice from "./slice/jobList";

export default configureStore({
  reducer: {
    jobList: jobListSlice,
  },
});