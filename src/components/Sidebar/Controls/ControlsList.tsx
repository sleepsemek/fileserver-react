import "./ControlsList.scss"
import ControlsItem, {type ControlsItemProps} from "./ControlsItem.tsx";

interface ControlsListProps {
    controlsElements: ControlsItemProps[]
}

export default function ControlsList({controlsElements}: ControlsListProps) {
    return (
        <ul className="controls__list">
            {controlsElements.map((controlsItem => (
                <ControlsItem {...controlsItem}/>
            )))}
        </ul>
    )
}