import MessageList from "../molecules/MessageList"

export default function ChatList() {
    const test = [
        'Abu Huraira',
        'Khalid Hasan',
        'Hasan Nakib',    
    ]

    return (
        <div className="w-full relative">
            <div className="h-full flex justify-end">
                <div className="w-72 h-auto mt-16 sm:top-0 bottom-0 fixed p-4">
                    <div className="w-full max-h-[750px] overflow-auto h-auto bg-[#b1b1d5] rounded-lg flex flex-col gap-y-2 justify-between p-4">
                        {test.map((item,index) => (
                            <MessageList key={index} hover_true={true} isActive={true} root_class="h-12" username={item} profileImage="/img2.jpg" />
                        ))}

                        {/*      ----------Chat list Here-----      */}

                    </div>
                </div>
            </div>
        </div>
    )
}