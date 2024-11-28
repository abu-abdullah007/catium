"use client";
import { DropdownTypes } from "@/types/initialtypes";
import { usePathname } from "next/navigation";

export default function Dropdown(
    {
        root_class,
        dropdown_item,
        link_class
    }: DropdownTypes) {
        const pathname = usePathname()

    return (
        <div className={`${root_class} shadow shadow-[#00000069] h-auto py-4 px-2 flex flex-col justify-between gap-y-2 items-center`}>
            {dropdown_item.map((item, index) => (
                <button
                    key={index}
                    className={`active:scale-[0.98] ${link_class} w-full border-x-2 border-[black] bg-[#ffffff7c] rounded-lg hover:bg-[#d8cece] box-border p-1 text-sm`}
                    onClick={()=>{
                        window.location.href = `${pathname}?action=${item.action_param}`
                    }}>{item.items}</button>
            ))}
        </div>
    )
}