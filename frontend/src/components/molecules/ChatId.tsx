"use client"
import Profile from "../atoms/Profile"
import { RxCross2 } from "react-icons/rx"
import MessageList from "./MessageList"
import { messageListType, profileTypes } from "@/types/initialtypes"
import { useDispatch } from "react-redux"
import { isVisible } from "@/redux/slices/PicoSlice"

interface chatTypes extends profileTypes,messageListType { }

export default function ChatId({ ...chatProps }: chatTypes) {
    const dispatch = useDispatch()


    return (
        <div className="h-12 w-full bg-[#c5c5a7] rounded-t-lg flex justify-between items-center">
            <MessageList root_class="h-10" {...chatProps} />
            <div className="p-4 justify-center items-center">
                <button className="text-xl active:scale-50" onClick={() => {
                    dispatch(isVisible(false))
                }}><RxCross2 /></button>
            </div>
        </div>
    )
}