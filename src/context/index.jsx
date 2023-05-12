import React from "react";
import { Provider as AuthProvider } from "./auth/index";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    return (
        <Context.Provider value={{}}>
            <AuthProvider>{children}</AuthProvider>
        </Context.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.object,
};

export { Context, Provider };
