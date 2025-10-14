import "./App.scss"
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Layout from "./components/layout/Layout.tsx";
import Section from "./sections/Section.tsx";
import FileList from "./components/Files/FileList.tsx";
import {IconFolders, IconLatest} from "./components/Icon.tsx";
import type {FileCardProps} from "./components/Files/FileCard.tsx";

export default function App() {
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
        <Layout>
            <Sidebar title="Fileserver"/>
            <main className="content">
                <h1 className="visually-hidden">File server main page</h1>
                <Section title={"Folders"} icon={IconFolders}>
                    {/*<FoldersList />*/}
                </Section>
                <Section title={"Latest"} icon={IconLatest}>
                    <FileList files={fileList}/>
                </Section>
            </main>
        </Layout>
    )
}