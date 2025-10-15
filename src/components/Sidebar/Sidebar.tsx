import "./Sidebar.scss"
import NavList from "./Navigation/NavList.tsx";
import {
    IconAnalytics, IconArchive,
    IconDocuments,
    IconFavorites,
    IconHome,
    IconPhotos, IconRecycle, IconSettings,
    IconVideos
} from "../ui/Icon/Icon.tsx";
import NotificationButton from "./NotificationButton.tsx";
import ControlsList from "./Controls/ControlsList.tsx";
import {Link} from "react-router-dom";

type SidebarProps = {
    title: string,
}

export default function Sidebar({ title } : SidebarProps) {

    const navElements = [
        {
            name: "Home",
            route: "/",
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
            route: "/videos",
            icon: {
                icon: IconVideos,
                color: '#C211F8',
                background: true,
                size: 30
            },
        },
        {
            name: "Photo Gallery",
            route: "/photos",
            icon: {
                icon: IconPhotos,
                color: '#F84E11',
                background: true,
                size: 30
            },
        },
        {
            name: "Documents",
            route: "/documents",
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
            route: "/analytics",
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
            route: "/favorites",
            icon: {
                icon: IconFavorites,
                color: '#E87D7D',
                background: true,
                size: 30
            },
        },
    ]

    const controlsElements = [
        {
            name: "Archive",
            route: "/archive",
            icon: {
                icon: IconArchive,
                background: true,
                size: 30
            }
        },
        {
            name: "Recycle",
            route: "/recycle",
            icon: {
                icon: IconRecycle,
                background: true,
                size: 30
            }
        },
        {
            name: "Settings",
            route: "/settings",
            icon: {
                icon: IconSettings,
                background: true,
                size: 30
            }
        },
    ]

    return (
        <aside className="sidebar">
            <header className="sidebar__header">
                <Link to="/" className="sidebar__logo h1">
                    { title }
                </Link>
                <NotificationButton hasNotification onClick={() => {}}/>
            </header>
            <div className="sidebar__controls">
                <NavList navElements={navElements} />
                <ControlsList controlsElements={controlsElements} />
            </div>
        </aside>
    )
}