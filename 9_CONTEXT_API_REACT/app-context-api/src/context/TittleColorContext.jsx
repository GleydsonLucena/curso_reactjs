import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const TittleColorContext = createContext();

export const tittleColorReducer = (tittle, action) => {
  // switch
};

export const TittleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tittleColorReducer, { color: "purple" });
  console.log("TittleColorContext", state);
  return (
    <TittleColorContext.Provider value={{ ...state }}>
      {children}
    </TittleColorContext.Provider>
  );
};

TittleColorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
