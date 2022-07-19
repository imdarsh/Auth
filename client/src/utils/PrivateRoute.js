import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    return localStorage.getItem('token') ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRoute;