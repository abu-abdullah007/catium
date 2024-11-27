import Profile from "../atoms/Profile"
import Notification from "../atoms/Notification"
import { FaBell } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function Header() {
    return (
        <div className="w-[200px] h-12 flex justify-between items-center px-5">
            <Notification icon_name={<FaBell />} isAlert={true} alert_number={5} />
            <Notification icon_name={<BiSolidMessageDetail />} isAlert={true} alert_number={8}/>
            <Profile isActive={true} root_class="h-10 w-10" profileImage="/img.jpg" linkHref="/" />
        </div>
    )
}