import {type ChangeEvent, type CSSProperties, useState} from "react";
import "./AudioRange.scss"

export default function AudioRange() {
    const [value, setValue] = useState(0)

    const onValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(event.target.value)

        setValue(currentValue)
    }

    return (
        <div className="audio-range">
            <input
                className="audio-range__input"
                type="range"
                min="0"
                max="100"
                value={value}
                onInput={onValueChanged}
            />
            <div
                className="audio-range__seekbar"
                style={{ "--progress": `${value}%` } as CSSProperties}
            ></div>
        </div>
    )
}