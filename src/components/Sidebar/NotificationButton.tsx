import type {PropsWithChildren} from "react";
import IconButton from "../IconButton.tsx";
import {IconBell} from "../Icon.tsx";

type NotificationButtonProps = PropsWithChildren<{
    hasNotification: boolean
}>

export default function NotificationButton({hasNotification}: NotificationButtonProps) {
    return (
        <IconButton ariaLabel="Notifications menu" icon={<IconBell hasNotification={hasNotification}/>}  />
    )
}