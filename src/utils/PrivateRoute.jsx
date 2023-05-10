import { Navigate, Outlet } from "react-router-dom";
import { NEWS_F6_TOKEN } from "./constants";

const PrivateRoute = () => {
    return localStorage.getItem(NEWS_F6_TOKEN) ? (
        <Outlet />
    ) : (
        <Navigate to='/login' />
    );
};

export default PrivateRoute;
