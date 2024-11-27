import HeaderLeft from "../molecules/HearedLeft"
import HeaderRight from "../molecules/HeaderRight"

export default function Header() {
    return (
        <div className="fixed top-0 w-full">
            <div className="bg-gradient-to-r from-[#9595c4] to-[#bfbfdfc9] flex justify-between items-center container mx-auto px-5 py-2">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </div>
    )
}