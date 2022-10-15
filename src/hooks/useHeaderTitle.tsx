import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useHeaderTitle() {
    const [headerTitle, setHeaderTitle] = useState("Dashboard");
    const location = useLocation();

    useEffect(() => {
        setNewHeaderTitle();
    }, [location.pathname]);

    const changeHeaderTitle = (newTitle: string) => {
        setHeaderTitle(newTitle);
    };

    const setNewHeaderTitle = () => {
        switch (location.pathname) {
            case "/dashboard":
                changeHeaderTitle("Dashboard");
                break;
            case "/course":
                changeHeaderTitle("Manage Courses");
            case "/course/add":
                changeHeaderTitle("ADD New Course");
            default:
                break;
        }
    };

    return { headerTitle, changeHeaderTitle };
}

export default useHeaderTitle;
