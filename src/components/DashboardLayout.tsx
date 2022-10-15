import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import useBreadCrumbs from "../hooks/useBreadCrumbs";
import useHeaderTitle from "../hooks/useHeaderTitle";
import Header from "./Header";
import LCOBreadcrumb from "./LCOBreadcrumb";
import SideNavBar from "./SideNavBar";

function DashboardLayout() {
    const { headerTitle } = useHeaderTitle();
    const { breadcrumbs } = useBreadCrumbs();
    return (
        <div className="flex">
            <div className="flex-[.2]">
                <div className="fixed w-[17%]">
                    <SideNavBar />
                </div>
            </div>
            <div className="flex-1 bg-gray-200">
                <Header title={headerTitle} />
                <LCOBreadcrumb breadcrumbs={breadcrumbs} />
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
