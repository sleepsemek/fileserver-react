import "./NavCard.scss"
import type {NavCardProps} from "./NavList.tsx";
import Icon from "../Icon.tsx";

export default function NavCard({ name, icon, hasNew } : NavCardProps) {
    return (
        <div className="nav-card">
            <div className="nav-card__header">
                <Icon {...icon} />
                {hasNew && (
                    <span className="nav-card__aside new-badge">New</span>
                )}
            </div>
            <div className="nav-card__title h4">{name}</div>
        </div>
    )
}
