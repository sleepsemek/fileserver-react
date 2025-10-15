import "./ControlsList.scss"
import Icon, {type IconProps} from "../../ui/Icon/Icon.tsx";
import {Link} from "react-router-dom";

export type ControlsItemProps = {
    name: string
    route: string
    icon: IconProps
}

export default function ControlsItem({name, route, icon}: ControlsItemProps) {
    return (
        <li className="controls__item">
            <Link to={route} className="controls__link">
                <Icon {...icon} />
                {name}
            </Link>
        </li>
    )
}