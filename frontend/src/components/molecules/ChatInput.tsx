"use client"
import { RiSendPlaneFill } from "react-icons/ri"
import Input from "../atoms/Input"

export default function ChatInput() {
    return (
        <div className="w-full h-12 rounded-b-lg bg-[#b1b1d5]">
            <Input
                icon_name={<RiSendPlaneFill />}
                placeHolder="Message..."
                box_class="gap-x-5"
                input_class="placeholder-[#404083]" />
        </div>
    )
}