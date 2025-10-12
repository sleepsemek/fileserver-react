import "./Sidebar.scss"
import NavList from "./NavList.tsx";
import {
    IconAnalytics,
    IconDocuments,
    IconFavorites,
    IconHome,
    IconPhotos,
    IconVideos
} from "../Icon.tsx";
import BurgerButton from "./BurgerButton.tsx";
import {useState} from "react";

type SidebarProps = {
    title: string,
}

export default function Sidebar({ title } : SidebarProps) {
    const [isActive, setIsActive] = useState(false)

    const controlsElements = [
        {
            name: "Home",
            icon: {
                icon: IconHome,
                color: '#11BBF8',
                background: true,
                size: 30
            },
            hasNew: true
        },
        {
            name: "Videos",
            icon: {
                icon: IconVideos,
                color: '#C211F8',
                background: true,
                size: 30
            },
        },
        {
            name: "Photo Gallery",
            icon: {
                icon: IconPhotos,
                color: '#F84E11',
                background: true,
                size: 30
            },
        },
        {
            name: "Documents",
            icon: {
                icon: IconDocuments,
                color: '#47F811',
                background: true,
                size: 30
            },
            hasNew: true
        },
        {
            name: "Analytics",
            icon: {
                icon: IconAnalytics,
                color: '#41EDBA',
                background: true,
                size: 30
            },
            hasNew: true
        },
        {
            name: "Favorites",
            icon: {
                icon: IconFavorites,
                color: '#E87D7D',
                background: true,
                size: 30
            },
        },
    ]

    return (
        <aside className={`sidebar ${isActive ? '' : 'collapsed'}`}>
            <header className="sidebar__header">
                <h1 className="sidebar__logo">
                    { title }
                </h1>
                <BurgerButton onClick={() => setIsActive(active => !active)} isActive={isActive}/>
            </header>
            <div className={`sidebar__controls ${isActive ? '' : 'hidden-mobile'}`}>
                <NavList navElements={controlsElements} />
            </div>
        </aside>
    )
}