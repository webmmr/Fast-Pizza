import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      state.cart.push(action.payload);
    },
    deletePizza(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      const selected = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );

      selected.quantity++;
      selected.totalPrice = selected.quantity * selected.unitPrice;
    },
    decreaseQuantity(state, action) {
      const selected = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );

      selected.quantity--;
      selected.totalPrice = selected.quantity * selected.unitPrice;
      if (selected.quantity === 0)
        cartSlice.caseReducers.deletePizza(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addPizza,
  deletePizza,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getPizzaQuantityCart = (id) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
