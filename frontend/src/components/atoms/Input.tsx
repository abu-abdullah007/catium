interface inputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    input_class?: string;
    box_class?: string;
    icon_name: React.ReactNode;
}

export default function Input(
    {
        input_class,
        box_class,
        icon_name,
        ...inputProps }: inputTypes) {
    return (
        <div className={`py-3 px-5 ${box_class} inline-flex justify-between items-center gap-x-3`}>
            <p className="text-2xl">{icon_name}</p>
            <input type="text"
                placeholder="Enter Text..."
                className={`bg-transparent ${input_class} outline-none`}
                {...inputProps} />
        </div>
    )
}