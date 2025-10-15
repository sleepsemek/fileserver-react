import type {PropsWithChildren} from "react";
import IconButton from "../ui/IconButton/IconButton.tsx";
import {IconBell} from "../ui/Icon/Icon.tsx";

type NotificationButtonProps = PropsWithChildren<{
    hasNotification: boolean
    onClick: () => void
}>

export default function NotificationButton({hasNotification, onClick}: NotificationButtonProps) {
    return (
        <IconButton ariaLabel="Notifications menu" icon={<IconBell hasNotification={hasNotification}/>} onClick={onClick} />
    )
}