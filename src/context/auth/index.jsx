import React from "react";
import PropTypes from "prop-types";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    const [authenticated, setAuthenticated] = React.useState(false);
    return (
        <Context.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </Context.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.object,
};

export { Context, Provider };
