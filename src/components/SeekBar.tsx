import {type ChangeEvent, type CSSProperties} from "react";
import "./SeekBar.scss"

type SeekBarProps = {
    value: number
    onChange: (valuePercent: number) => void
}

export default function SeekBar({value, onChange}: SeekBarProps) {
    const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value))
    }

    return (
        <div className="seekbar">
            <input
                className="seekbar__input"
                type="range"
                min="0"
                max="100"
                value={value}
                onInput={onValueChanged}
            />
            <div
                className="seekbar__progress"
                style={{ "--progress": `${value}%` } as CSSProperties}
            ></div>
        </div>
    )
}