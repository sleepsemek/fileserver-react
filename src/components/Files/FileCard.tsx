import "./FileCard.scss"
import Icon, {IconAudio, IconDocument, IconEye, IconHeart, IconPen, IconPlay, IconVolume} from "../Icon.tsx";
import type {ReactNode} from "react";
import IconButton from "../IconButton.tsx";
import AudioRange from "../AudioRange.tsx";

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
    const randomCardVariant = cardVariants[Math.floor(Math.random() * 4)]

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
                        <IconButton ariaLabel="Mute" icon={<Icon icon={IconVolume} size={24}/>} />
                        <AudioRange />
                        <IconButton ariaLabel="Play" icon={<Icon icon={IconPlay} size={24}/>} />
                    </>
                )}
                {fileType !== "audio" && fileType !== "video" && (
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