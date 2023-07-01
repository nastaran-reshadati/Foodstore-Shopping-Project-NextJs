import { getStorage, saveInStorage, saveStorage } from "./localStorage";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from "./actionTypes";

let initialState = { cart: [] };

if (typeof window !== "undefined") {
  initialState = {
    cart: localStorage.getItem("shopping-cart")
      ? JSON.parse(localStorage.getItem("shopping-cart"))
      : [],
  };
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.cart = [
        ...state.cart,
        { ...action.payload.productData, qty: action.payload.qty },
      ];
      saveInStorage(state.cart);

      console.log(state.cart);
      // saveStorage(state.cart);

      return {
        ...state,
        cart: state.cart,
      };

    case REMOVE_FROM_CART:
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveInStorage(state.cart);

      //  برگشت داده میشوند/همه محصولات جز محصولی که ایدیش برابر با پیلود هستش

      console.log(state.cart);
      return {
        ...state,
        cart: state.cart,
      };

    case INCREMENT:
      console.log(state.cart);
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      console.log(state);
      saveInStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };

    case DECREMENT:
      console.log(state.cart);
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
      saveInStorage(state.cart);
      return {
        ...state,
        cart: state.cart,
      };

    case CLEAR_CART:
      state.cart = [];
      saveInStorage([]);

      return { ...state, cart: state.cart };
    default:
      return state;
  }
};

export default cartReducer;
