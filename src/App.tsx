import '@/App.module.scss'
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Layout from "./components/layout/Layout.tsx";
import FoldersSection from "./sections/FoldersSection.tsx";

export default function App() {
  return (
    <Layout>
        <Sidebar title="Fileserver"/>
        <main>
            <FoldersSection />
        </main>
    </Layout>
  )
}