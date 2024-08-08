import PropTypes from "prop-types";
import { useState } from "react";
import { createContext } from "react";

export const UtilsContext = createContext();

export const UtilsContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <UtilsContext.Provider
      value={{
        error,
        setError,
        loading,
        setLoading,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};
UtilsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
