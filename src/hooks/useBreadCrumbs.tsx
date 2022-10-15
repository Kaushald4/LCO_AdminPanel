import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useBreadCrumbs() {
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    const location = useLocation();

    useEffect(() => {
        generateBreadcrumbList();
    }, [location.pathname]);

    const generateBreadcrumbList = () => {
        const list = location.pathname.split("/").filter((list) => list !== "");
        list.unshift("Home");
        setBreadcrumbs(list);
    };
    return { breadcrumbs };
}

export default useBreadCrumbs;
