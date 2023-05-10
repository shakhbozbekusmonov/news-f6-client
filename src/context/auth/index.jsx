import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    const [authenticated, setAuthenticated] = React.useState(false);
    return (
        <Context.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
