import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export { Context, Provider };
