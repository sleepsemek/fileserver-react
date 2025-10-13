import "./FileList.scss"
import FileCard, {type FileCardProps} from "./FileCard.tsx";

type FileListProps = {
    files: FileCardProps[]
}

export default function FileList({ files }: FileListProps) {
    return (
        <ul className="file-list file-list--4-cols">
            {files.map((file) => (
                <li className="file-list__item" key={file.name}>
                    <FileCard {...file}/>
                </li>
            ))}
        </ul>
    )
}