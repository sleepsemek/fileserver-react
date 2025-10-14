import "./IconButton.scss"
import type {ReactNode} from "react";

type IconButtonProps = {
    onClick?: () => void
    ariaLabel: string
    icon: ReactNode
    type?: "submit" | "reset" | "button"
}

export default function IconButton({onClick, ariaLabel, icon, type} : IconButtonProps) {
    return (
        <button
            className="icon-button"
            onClick={onClick}
            aria-label={ariaLabel}
            title={ariaLabel}
            type={type ?? "button"}
        >
            {icon}
        </button>
    )
}