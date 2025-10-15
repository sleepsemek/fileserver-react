import Section from "../components/Section/Section.tsx";
import {IconFolders, IconLatest} from "../components/ui/Icon/Icon.tsx";
import FileList from "../components/Files/FileList.tsx";
import type {FileCardProps} from "../components/Files/FileCard.tsx";

export default function DashboardPage() {
    const fileList : FileCardProps[] = [
        {
            name: "Card1",
            fileType: "audio",
        },
        {
            name: "Card2",
            fileType: "document",
        },
        {
            name: "Card3",
            fileType: "audio",
        },
        {
            name: "Card4",
            fileType: "document",
        },
        {
            name: "Card5",
            fileType: "audio",
        },
    ]

    return (
        <>
            <h1 className="visually-hidden">File server main page</h1>
            <Section title={"Folders"} icon={IconFolders}>
                {/*<FoldersList />*/}
            </Section>
            <Section title={"Latest"} icon={IconLatest}>
                <FileList files={fileList}/>
            </Section>
        </>
    )
}