import "./Layout.scss"
import type {PropsWithChildren} from "react";

export default function Layout({ children } : PropsWithChildren) {
    return (
        <>
            <div className="layout__background"></div>
            <div className="layout__content">
                { children }
            </div>
        </>
    )
}