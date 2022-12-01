const { useContext, useReducer } = require("react");
import reducer, { initialState } from "./reducer";

const stateContext = useContext(initialState);
console.log(initialState);

const stateContextProvider = () => {
  const [state, dispatch] = useReducer(initialState, reducer);
};
