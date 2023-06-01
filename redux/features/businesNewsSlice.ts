import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsServices from "../services/newsServices";


interface NewsState {
    businessNews: any
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    message: string;
  }
  
  const initialState: NewsState = {
    businessNews: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  };

export const getBusinessNews = createAsyncThunk<NewsState, undefined>(
  "news",
  async (_, thunkApi) => {
    try {
      return await newsServices.businessNews();
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkApi.rejectWithValue({
        message,
      });
    }
  }
);

const businessNewsSlice = createSlice({
  name: "latestNews",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBusinessNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBusinessNews.fulfilled, (state, action) => {
        (state.isLoading = false),
          (state.isSuccess = true),
          (state.isError = false);
        state.businessNews = action.payload;
      })
      .addCase(getBusinessNews.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export const { } = businessNewsSlice.actions;

export default businessNewsSlice.reducer;
