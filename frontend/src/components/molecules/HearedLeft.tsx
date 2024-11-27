import Link from "next/link";
import Input from "../atoms/Input";
import { SlMagnifier } from "react-icons/sl";
import Image from "next/image";

export default function HeaderLeft() {
    return (
        <div className="flex justify-between items-center gap-x-20">
            <Link href={'/'}><Image src={'/cat.png'} height={1000} width={1000} alt="catium logo" className="h-10 w-auto object-cover" /></Link>
            <Input
                icon_name={<SlMagnifier />}
                icon_class="opacity-70"
                box_class="bg-[#d1d1f0] rounded-md hidden md:inline-flex"
                placeHolder="Search..." />
        </div>
    )
}