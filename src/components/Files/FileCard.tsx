import "./FileCard.scss"
import Icon, {IconAudio, IconDocument, IconEye, IconHeart, IconPen, IconPlay, IconVolume} from "../Icon.tsx";
import {type ReactNode, useState} from "react";
import IconButton from "../IconButton.tsx";
import SeekBar from "../SeekBar.tsx";

export type FileCardProps = {
    name: string
    fileType: FileType
    filePreview?: ReactNode
}

type FileType = "audio" | "video" | "photo" | "document"

const iconMap = {
    "audio" : IconAudio,
    "document" : IconDocument
}

const cardVariants = ["", "file-card--secondary", "file-card--tertiary", "file-card--quaternary"]

export default function FileCard({ name, fileType, filePreview } : FileCardProps) {
    const hasTextHeader = fileType === "audio" || fileType === "document"
    const [randomCardVariant] = useState(() => cardVariants[Math.floor(Math.random() * 4)])
    const [isPlaying, setIsPlaying] = useState(false)
    const [seekBarProgressPercent, setSeekBarProgress] = useState(0)

    const togglePlayMenu = () => setIsPlaying((prevState) => !prevState)

    return (
        <div className={`file-card ${randomCardVariant}`}>
            <div className="file-card__header">
                {hasTextHeader && (
                    <>
                        <Icon icon={iconMap[fileType]} size={48} />
                        <div className="file-card__title">{name}</div>
                    </>
                )}
            </div>
            <div className="file-card__controls">
                {fileType === "audio" && (
                    <>
                        {isPlaying && (
                            <>
                                <IconButton ariaLabel="Mute" icon={<Icon icon={IconVolume} size={24}/>} />
                                <SeekBar value={seekBarProgressPercent} onChange={setSeekBarProgress}/>
                            </>
                        )}
                        {!isPlaying && (
                            <>
                                <IconButton ariaLabel="Rename" icon={<Icon icon={IconPen} size={24}/>} />
                                <IconButton ariaLabel="View" icon={<Icon icon={IconEye} size={24}/>} />
                            </>
                        )}
                        <IconButton ariaLabel="Play" onClick={togglePlayMenu} icon={<Icon icon={IconPlay} size={24}/>} />
                        {!isPlaying && (
                            <IconButton ariaLabel="Add to Favorites" icon={<Icon icon={IconHeart} size={24}/>} />
                        )}
                    </>
                )}
                {fileType !== "audio" && (
                    <>
                        <IconButton ariaLabel="Rename" icon={<Icon icon={IconPen} size={24}/>} />
                        <IconButton ariaLabel="View" icon={<Icon icon={IconEye} size={24}/>} />
                        <IconButton ariaLabel="Add to Favorites" icon={<Icon icon={IconHeart} size={24}/>} />
                    </>
                )}
            </div>
        </div>
    )
}