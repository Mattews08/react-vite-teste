// src/features/menu/menuSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Menu, MenuItem } from "../../types";

interface MenuState {
  items: MenuItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MenuState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const response = await axios.get<Menu>(
    "https://cdn-dev.preoday.com/challenge/menu"
  );
  return response.data.sections.flatMap((section) => section.items);
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
        (state, action: PayloadAction<MenuItem[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch menu";
      });
  },
});

export default menuSlice.reducer;
