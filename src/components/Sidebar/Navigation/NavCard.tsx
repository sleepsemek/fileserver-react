import "./NavCard.scss"
import Icon, {type IconProps} from "../../ui/Icon/Icon.tsx";
import {Link} from "react-router-dom";

export type NavCardProps = {
    name: string
    route: string
    icon: IconProps
    hasNew?: boolean | null
}

export default function NavCard({ name, route, icon, hasNew } : NavCardProps) {
    return (
        <Link to={route} className="nav-card">
            <div className="nav-card__header">
                <Icon {...icon} />
                {hasNew && (
                    <span className="nav-card__aside new-badge">New</span>
                )}
            </div>
            <div className="nav-card__title h4">{name}</div>
        </Link>
    )
}
