import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import LoginLayout from "../components/LoginLayout";
import PrivateRoute from "../components/PrivateRoute";
import AddCourse from "./addCourse";
import CoursePage from "./coursePage";
import DashboardPage from "./dashboardPage";

import Login from "./login";

const routes = [
    {
        index: true,
        element: <Login />,
        layout: "admin",
    },
    {
        path: "/dashboard",
        index: true,
        element: (
            <PrivateRoute>
                <DashboardPage />
            </PrivateRoute>
        ),
        layout: "dashboard",
    },
    {
        path: "/course",
        index: true,
        element: (
            <PrivateRoute>
                <CoursePage />
            </PrivateRoute>
        ),
        layout: "dashboard",
    },
    {
        path: "/course/add",
        element: (
            <PrivateRoute>
                <AddCourse />
            </PrivateRoute>
        ),
        layout: "dashboard",
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/",
        element: <DashboardLayout />,
        children: routes
            .filter((route: any) => route.layout === "dashboard")
            .map((route: any) => {
                return {
                    path: route.path,
                    element: route.element,
                    index: route.index,
                };
            }),
    },
]);

export default router;
