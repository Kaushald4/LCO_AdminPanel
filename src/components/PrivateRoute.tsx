import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

interface Props {
    children?: any;
}

function PrivateRoute({ children }: Props) {
    const authState = useAppSelector((state) => state.auth);

    if (authState.adminDetails) {
        return children;
    } else {
        return <Navigate to={"/"} replace={true} />;
    }
}

export default PrivateRoute;
