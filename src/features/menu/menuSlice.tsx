import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Section } from "../../types";

interface MenuState {
  items: Section[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MenuState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const response = await axios.get(
    "https://react-vite-teste.vercel.app/api/menu"
  );
  return response.data.sections;
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMenu.fulfilled,
        (state, action: PayloadAction<Section[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
          console.log("Menu sections loaded:", state.items);
        }
      )
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch menu";
      });
  },
});

export default menuSlice.reducer;
