import "./NavList.scss"
import NavCard from "./NavCard.tsx";
import type {IconProps} from "../Icon.tsx";

export type NavListProps = {
    navElements: NavCardProps[]
}

export type NavCardProps = {
    name: string
    icon: IconProps
    hasNew?: boolean | null
}

export default function NavList({ navElements } : NavListProps) {
    return (
        <nav className="nav">
            <ul className="nav__list">
                {/*Список не динамический, юзаю индекс*/}
                {navElements.map((navCardProps, index) => (
                    <li className="nav__item" key={index}>
                        <NavCard {...navCardProps}/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}