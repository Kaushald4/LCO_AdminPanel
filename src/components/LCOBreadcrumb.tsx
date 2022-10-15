import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface Props {
    breadcrumbs: string[];
}

function LCOBreadcrumb({ breadcrumbs }: Props) {
    return (
        <Breadcrumbs fullWidth>
            {breadcrumbs.map((breadcrumb, index) => {
                const path = breadcrumb === "Home" ? "/dashboard" : `/${breadcrumb}`;
                return (
                    <Link key={index} className="capitalize" to={path}>
                        {breadcrumb}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}

export default LCOBreadcrumb;
