import ChatId from "./ChatId"
import ChatInput from "./ChatInput"
import MessageBox from "./MessageBox"

export default function Chat() {
    return (
        <div className={`absolute w-[300px] h-[395px] shadow shadow-[black] right-72 bottom-4 rounded-lg flex flex-col justify-between`}>
            <ChatId profileImage="/img2.jpg" hover_true={false} username="Abu Huraira" isActive={true} />
            <MessageBox />
            <ChatInput />
        </div>
    )
}