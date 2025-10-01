import style from "./IconButton.module.scss"
import type {ReactNode} from "react";

type IconButtonProps = {
    onClick?: () => void;
    ariaLabel: string;
    icon: ReactNode
}

export default function IconButton({onClick, ariaLabel, icon} : IconButtonProps) {
    return (
        <button
            className={style.root}
            onClick={onClick}
            aria-label={ariaLabel}
            type={"button"}
        >
            {icon}
        </button>
    )
}