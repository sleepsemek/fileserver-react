import "./NavCard.scss"
import Icon, {type IconProps} from "../../Icon.tsx";

export type NavCardProps = {
    name: string
    icon: IconProps
    hasNew?: boolean | null
}

export default function NavCard({ name, icon, hasNew } : NavCardProps) {
    return (
        <a href="" className="nav-card">
            <div className="nav-card__header">
                <Icon {...icon} />
                {hasNew && (
                    <span className="nav-card__aside new-badge">New</span>
                )}
            </div>
            <div className="nav-card__title h4">{name}</div>
        </a>
    )
}
