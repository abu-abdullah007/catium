interface notificationTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon_name: React.ReactNode;
    span_class?: string;
    notification_class?: string;
    alert_number: number;
    icon_class?: string;
    isAlert: boolean;
}

export default function Notification(
    {
        alert_number,
        icon_name,
        span_class,
        icon_class,
        isAlert,
        notification_class,
        ...notificationProps
    }: notificationTypes) {
    return (
        <button className={`inline-block relative ${notification_class} active:scale-95 cursor-pointer`} {...notificationProps}>
            <p className={`${icon_class ? icon_class : 'text-2xl'}`}>{icon_name}</p>
            {isAlert &&
                <span className={`${span_class ? span_class : 'bg-red-600'} absolute top-0 rounded-full border-2 w-4 h-4 border-white text-[10px] inline-flex justify-center items-center text-white`}>
                    {alert_number > 9 ? '+' : alert_number}
                </span>}
        </button>
    )
}