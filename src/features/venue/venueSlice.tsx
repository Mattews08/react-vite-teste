import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Venue } from "../../types";

interface VenueState {
  venue: Venue | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: VenueState = {
  venue: null,
  status: "idle",
  error: null,
};

export const fetchVenue = createAsyncThunk("venue/fetchVenue", async () => {
  const response = await axios.get(
    "https://react-vite-teste.vercel.app/api/venue/9"
  );
  return response.data;
});

const venueSlice = createSlice({
  name: "venue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenue.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVenue.fulfilled, (state, action: PayloadAction<Venue>) => {
        state.status = "succeeded";
        state.venue = action.payload;
      })
      .addCase(fetchVenue.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch venue data";
      });
  },
});

export default venueSlice.reducer;
