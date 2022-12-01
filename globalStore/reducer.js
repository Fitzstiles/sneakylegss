export const initialState = {
  cart: [],
  total: 0,
  user: null,
  comment: "",
};

const reducer = (state, action) => {
  const [type, payload] = action();
};

export default reducer;
