import "./NavList.scss"
import NavCard, {type NavCardProps} from "./NavCard.tsx";

export type NavListProps = {
    navElements: NavCardProps[]
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