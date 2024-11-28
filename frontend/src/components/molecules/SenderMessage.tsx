import { commonMessageTypes } from "@/types/initialtypes";
import Profile from "../atoms/Profile";

export default function SenderMessage({...messageProps}:commonMessageTypes) {
    return (
        <div className="w-full h-auto relative p-4 flex justify-start">
            <div className="flex gap-x-2">
                <Profile root_class="h-4" {...messageProps} />
                <div className="w-auto max-w-[200px] h-auto bg-blue-400 p-2 rounded-xl">
                    <p>{messageProps.root_message}</p>
                </div>
            </div>

            <div className="absolute bottom-[-2px] right-24">
                <p className="text-[10px] opacity-70">{messageProps.send_time}</p>
            </div>
        </div>

    )
}