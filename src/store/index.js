import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartState = {
  cartToggle: false,
  item: [
    {
      id: 1,
      title: "Apple Pie Frozen",
      price: 12,
      description: "Sweet apple pie to enjoy with family",
    },
    {
      id: 2,
      title: "Nescafe Caramel 3 in 1",
      price: 8,
      description: "easy fast and delicious~",
    },
    {
      id: 3,
      title: "Febreez DishWasher",
      price: 7,
      description: "One sweep 100% total clean",
    },
  ],

  myCartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    toggle(state) {
      state.cartToggle = !state.cartToggle;
    },

    addToCart(state, action) {
      state.myCartList.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
