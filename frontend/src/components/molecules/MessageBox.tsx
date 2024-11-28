import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";

export default function MessageBox() {
    return (
        <div className="w-full h-[299px] bg-white flex flex-col justify-between overflow-auto">
            <SenderMessage />
            <ReceiverMessage />
        </div>
    )
}