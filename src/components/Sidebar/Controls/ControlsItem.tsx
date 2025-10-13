import "./ControlsList.scss"
import Icon, {type IconProps} from "../../Icon.tsx";

export type ControlsItemProps = {
    name: string
    icon: IconProps
}

export default function ControlsItem(controlsItemProps: ControlsItemProps) {
    const {
        name,
        icon,
    } = controlsItemProps
    return (
        <li className="controls__item">
            <a href="" className="controls__link">
                <Icon {...icon} />
                {name}
            </a>
        </li>
    )
}