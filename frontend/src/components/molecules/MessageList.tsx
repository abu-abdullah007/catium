"use client";
import { messageListType, profileTypes } from "@/types/initialtypes";
import Profile from "../atoms/Profile";
import { useDispatch } from "react-redux";
import { isVisible } from "@/redux/slices/PicoSlice";


export default function MessageList({...messageProps}:messageListType) {
    const dispatch = useDispatch()

    return (
        <div className={`w-full h-16 relative ${messageProps.hover_true === true? 'hover:bg-gray-300':''} cursor-pointer rounded-lg gap-x-5 flex items-center px-4`}
        onClick={()=>{
            messageProps.hover_true === true ? dispatch(isVisible(true)) : null
        }}>
            <Profile {...messageProps} />
            <p>{messageProps.username}</p>
        </div>
    )
}