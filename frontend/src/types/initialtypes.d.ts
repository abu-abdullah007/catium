export interface profileTypes extends React.LinkHTMLAttributes<HTMLHyperlinkElementUtils> {
    linkHref?: string;
    profileImage: string;
    isActive: boolean;
    root_class?: string;
}

export interface inputTypes extends React.InputHTMLAttributes<HTMLInputElement> {
    input_class?: string;
    box_class?: string;
    icon_class?: string;
    placeHolder: string;
    icon_name: React.ReactNode;
}

export interface notificationTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon_name: React.ReactNode;
    span_class?: string;
    notification_class?: string;
    alert_number: number;
    icon_class?: string;
    isAlert: boolean;
}

export interface Dropdown_itemType {
    [key: string]: string | number;
    action_param: string;
}

export interface DropdownTypes {
    root_class?: string;
    dropdown_item: Dropdown_itemType[];
    link_class?: string
}


export interface messageListType extends profileTypes {
    username: string;
    hover_true: boolean;
}

export interface commonMessageTypes extends profileTypes {
    root_message: string;
    send_time: string;
}