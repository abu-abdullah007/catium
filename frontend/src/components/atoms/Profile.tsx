import { profileTypes } from "@/types/initialtypes"
import Image from "next/image"
import Link from "next/link"

export default function Profile(
    {
        linkHref,
        profileImage,
        isActive,
        root_class,
        ...linkAttr
    }: profileTypes) {
    return (
        <Link href={linkHref ? linkHref : ''}
            className={`${root_class ? root_class : 'w-16 h-16'} rounded-full active:scale-[0.98] my-2 border-[1.5px] border-[blue] relative`}
            {...linkAttr}>
            <Image src={profileImage ? profileImage : '/avatar.jpg'} height={1000} alt="user profile" width={1000} className="w-full h-full object-cover rounded-full" />
            {isActive && <span className="inline-block w-2/6 h-2/6 rounded-full bg-red-500 top-0 border-2 border-white absolute left-[-3px]"></span>}
        </Link>
    )
}