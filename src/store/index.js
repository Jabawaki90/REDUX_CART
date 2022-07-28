import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartState = {
  cartToggle: false,
  item: [
    {
      id: 1,
      quantity:1,
      title: "Apple Pie Frozen",
      price: 12,
      description: "Sweet apple pie to enjoy with family",
      
    },
    {
      id: 2,
      quantity:1,
      title: "Nescafe Caramel 3 in 1",
      price: 8,
      description: "easy fast and delicious~",
      
    },
    {
      id: 3,
      quantity:1,
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
      const newItem = action.payload.id
      const {price} = action.payload
      const existingItem = state.myCartList.find(item=> item.id === newItem)
      if(!existingItem){
        state.myCartList.push({...action.payload,quantity:1,totalAmount: price});
      }else{
        existingItem.quantity ++
        existingItem.totalAmount = existingItem.price * existingItem.quantity
      }  
    },

    removeButtonFromCart(state,action){
      const itemID = action.payload
      const selectedItem = state.myCartList.find(item=> item.id === itemID)
      if(selectedItem){
        selectedItem.quantity--
        selectedItem.totalAmount = selectedItem.price * selectedItem.quantity
        if(selectedItem.quantity <1){
          state.myCartList = state.myCartList.filter(item=> item.id !== itemID)
          
        }
      }
    },

    addButtonToCart(state, action){
      const itemID = action.payload
      const selectedItem = state.myCartList.find(item=> item.id === itemID)
      if(selectedItem){
        selectedItem.quantity++
        selectedItem.totalAmount = selectedItem.price * selectedItem.quantity
      }
    }
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
