import { Avatar, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { signout } from "../redux/features/auth/authAction";

interface Props {
    title: string;
}

function Header({ title }: Props) {
    const dispatch = useAppDispatch();

    const handleMenuClick = (name: string) => {
        if (name === "signout") {
            dispatch(signout());
        }
    };

    return (
        <div className="h-[80px]  px-[40px] flex items-center justify-between">
            <h1 className="text-[2.4rem] font-[500] text-gray-900">{title}</h1>

            <Menu>
                <MenuHandler>
                    <Avatar
                        className="cursor-pointer"
                        src="https://www.material-tailwind.com/img/face-2.jpg"
                        alt="avatar"
                    />
                </MenuHandler>
                <MenuList onClick={(e: any) => handleMenuClick(e.target.getAttribute("data-id"))}>
                    <MenuItem data-id="profile">Profile</MenuItem>
                    <MenuItem data-id="signout">Signout</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}

export default Header;
