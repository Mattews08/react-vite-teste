import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import menuReducer from "../features/menu/menuSlice";
import venueReducer from "../features/venue/venueSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    venue: venueReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
