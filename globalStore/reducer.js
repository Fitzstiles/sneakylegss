export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartitem) => cartitem.id === action.id
      );
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id} as its not in the basket)`
        );
      }
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default reducer;
