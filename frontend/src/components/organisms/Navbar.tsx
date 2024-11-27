"use client"
import { MdCategory } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ChatList from "./ChatList";


export default function Navbar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isView, setIsView] = useState(10)

    const navItem = [
        { icon: <MdCategory />, param: 'category', tooltip: 'Categorys' },
        { icon: <FaUserDoctor />, param: 'doctors', tooltip: 'Doctors' },
        { icon: <FaBowlFood />, param: 'petFood', tooltip: 'Pet Foods' },
        { icon: <MdGroups />, param: 'groups', tooltip: 'Groups' },
        { icon: <MdOutlineOndemandVideo />, param: 'videos', tooltip: 'Videos' },
    ]

    return (
        <div className="w-full h-full flex sm:flex-row flex-col justify-between">
            <div className="sm:h-[600px] h-28 sm:w-28 sm:min-w-28 w-full p-5 fixed top-16">
                <div className="w-full h-full bg-[#9595c4] rounded-md flex flex-row sm:flex-col justify-between items-center sm:py-4">
                    <div className="h-1/2 w-full max-h-[600px] flex sm:flex-col flex-row gap-y-4 justify-between items-center">
                        {navItem.map((item, index) => (
                            <button key={index} onMouseEnter={() => {
                                setIsView(index)
                            }} onMouseLeave={() => {
                                setIsView(10)
                            }} className="p-2 relative w-full flex justify-center items-center active:scale-95" onClick={() => {
                                window.location.href = `${pathname}?item=${item.param}`
                            }}>
                                <p className="text-xl text-[#14149a] hover:text-[#5858b8]">{item.icon}</p>
                                {isView === index && <div className="absolute animate-pulse right-[-134px] w-32 py-5 rounded-xl bg-[#afafe7]">{item.tooltip}</div>}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-center items-center sm:pr-0 pr-5">
                        <button className="active:scale-95">
                            <p className="text-xl text-[#14149a] hover:text-[#5858b8]"><FaCircleInfo /></p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    );
}
