import "./FileCard.scss"

export type FileCardProps = {
    name: string
}

export default function FileCard({name} : FileCardProps) {
    return (
        <div className="file-card">
            <div className="file-card__body">
                {name}
            </div>
            <div className="file-card__controls">

            </div>
        </div>
    )
}