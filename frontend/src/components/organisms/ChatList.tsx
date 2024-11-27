import Profile from "../atoms/Profile"

export default function ChatList() {
    return (
        <div className="w-full">
            <div className="h-full flex justify-end">
                <div className="w-72 h-auto max-h-[800px] overflow-auto mt-16 sm:top-0 bottom-0 fixed p-4">
                    <div className="w-full h-full bg-[#b1b1d5] rounded-lg flex flex-col gap-y-5 justify-between">
                    </div>
                </div>
            </div>
        </div>
    )
}