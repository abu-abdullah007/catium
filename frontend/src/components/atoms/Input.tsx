import { inputTypes } from "@/types/initialtypes";

export default function Input(
    {
        input_class,
        box_class,
        icon_name,
        icon_class,
        placeHolder,
        ...inputProps }: inputTypes) {
    return (
        <div className={`py-3 px-5 ${box_class} inline-flex justify-between items-center gap-x-3`}>
            <button className={`text-2xl active:scale-95 ${icon_class}`}>{icon_name}</button>
            <input type="text"
                placeholder={placeHolder}
                className={`bg-transparent ${input_class} outline-none`}
                {...inputProps} />
        </div>
    )
}