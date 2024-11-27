"use client";
import Profile from "../atoms/Profile"
import Notification from "../atoms/Notification"
import Dropdown from "../atoms/Dropdown";
import { FaBell } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { useState } from "react";

export default function HeaderRight() {
    const [isActive, setIsActive] = useState(false)
    const dropdown = [
        {items:'Profile',action_param:'logout'},
        {items:'Settings',action_param:'login'},
        {items:'Logout',action_param:'logout'},
    ]

    return (
        <div className="w-[200px] h-12 relative flex justify-between items-center px-5">
            <Notification icon_name={<FaBell />} isAlert={true} alert_number={5} />
            <Notification icon_name={<BiSolidMessageDetail />} isAlert={true} alert_number={8} />
            <Profile isActive={true} root_class="h-10 w-10" profileImage="/img.jpg" linkHref="/" onClick={() => {
                setIsActive(!isActive)
            }} />
            {isActive &&
                <Dropdown
                    root_class="absolute bg-[#30ec66] top-14 rounded-md right-0 w-[200px]"
                    dropdown_item={dropdown} />}
        </div>
    )
}