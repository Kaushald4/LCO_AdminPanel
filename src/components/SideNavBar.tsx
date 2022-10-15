import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { NavLink, useLocation } from "react-router-dom";

import LCOSvgLogo from "../assets/logo.svg";

const Navbar = [
    {
        component: LCOSvgLogo,
        icon: null,
        path: "dashboard",
        logo: true,
    },
    {
        title: "Dashboard",
        icon: null,
        path: "dashboard",
    },
    {
        title: "Manage Courses",
        path: "course",
        // children: [
        //     {
        //         title: "ALL Courses",
        //         path: "all-courses",
        //     },
        //     {
        //         title: "ADD New",
        //         path: "add-new-course",
        //     },
        // ],
    },
];

function Icon({ id, open }: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

function SideNavBar() {
    const [open, setOpen] = useState(0);

    const location = useLocation();
    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <div className=" bg-[#341433] h-[100vh] overflow-y-auto w-full">
            {Navbar.map((navbar: any, index: number) => {
                if (navbar?.logo) {
                    return (
                        <div key={index} className="h-[50px] my-[50px]">
                            <img src={navbar.component} className="h-full w-full" alt="LCO LOGO" />
                        </div>
                    );
                }
                if (navbar?.children) {
                    return (
                        <Accordion
                            key={index}
                            open={open === index}
                            icon={<Icon id={index} open={open} />}
                        >
                            <AccordionHeader
                                style={{
                                    fontSize: "1rem",
                                    borderBottom: "none",
                                    color: "#FFFFFF",
                                    fontWeight: location.pathname.includes(
                                        navbar.path?.replace("/", "")
                                    )
                                        ? "600"
                                        : "normal",
                                    paddingBottom: 0,
                                }}
                                onClick={() => handleOpen(index)}
                            >
                                {navbar.title}
                            </AccordionHeader>
                            <AccordionBody>
                                {navbar.children.map((navChild: any, index: number) => {
                                    return (
                                        <div key={index} className="ml-[20px] mb-[10px]">
                                            <NavLink
                                                to={navChild.path}
                                                style={({ isActive }) => {
                                                    return {
                                                        fontWeight: isActive ? "600" : "normal",
                                                        color: "#FFFFFF",
                                                    };
                                                }}
                                            >
                                                {navChild.title}
                                            </NavLink>
                                        </div>
                                    );
                                })}
                            </AccordionBody>
                        </Accordion>
                    );
                }
                return (
                    <NavLink
                        key={index}
                        style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "600" : "normal",
                                color: "#FFFFFF",
                            };
                        }}
                        to={navbar.path}
                    >
                        <div className="relative py-[10px] px-[20px] cursor-pointer hover:bg-[#230e22] hover:before:content-[' '] hover:before:absolute hover:before:left-0 hover:before:h-[100%] hover:before:top-0 hover:before:inline-block hover:before:w-[4px] hover:before:bg-deep-orange-50">
                            {navbar.title}
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default SideNavBar;
