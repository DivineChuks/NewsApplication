import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsServices from "../services/newsServices";

interface NewsState {
  latestNews: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const initialState: NewsState = {
  latestNews: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getLatestNews = createAsyncThunk<NewsState, string>(
  "Latest News",
  async (sourceQuery, thunkApi) => {
    try {
      return await newsServices.latestNews(sourceQuery);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkApi.rejectWithValue({
        message,
      });
    }
  }
);

const latestNewsSlice = createSlice({
  name: "latest News",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLatestNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLatestNews.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false);
        state.latestNews = action.payload;
      })
      .addCase(getLatestNews.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export const { } = latestNewsSlice.actions;

export default latestNewsSlice.reducer;
