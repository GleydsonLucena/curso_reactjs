import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const TittleColorContext = createContext();

export const tittleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

export const setColorTittle = (color, dispatch) => {
  dispatch({ type: color });
};

export const TittleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tittleColorReducer, { color: "purple" });
  return (
    <TittleColorContext.Provider value={{ ...state, dispatch, setColorTittle }}>
      {children}
    </TittleColorContext.Provider>
  );
};

TittleColorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
