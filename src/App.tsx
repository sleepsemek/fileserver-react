import "./App.scss"
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.tsx";
import DocumentsPage from "./pages/DocumentsPage.tsx";
import PhotosPage from "./pages/PhotosPage.tsx";
import VideosPage from "./pages/VideosPage.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import AnalyticsPage from "./pages/AnalyticsPage.tsx";
import RecyclePage from "./pages/RecyclePage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";

export default function App() {
    return (
        <>
            <div className="app__background"></div>
            <div className="app__content">
                <Sidebar title="Fileserver"/>
                <main className="app__main">
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/videos" element={<VideosPage />} />
                        <Route path="/photos" element={<PhotosPage />} />
                        <Route path="/documents" element={<DocumentsPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />

                        <Route path="/archive" element={<ArchivePage />} />
                        <Route path="/recycle" element={<RecyclePage />} />
                        <Route path="/settings" element={<SettingsPage />} />

                        <Route path="*" element={<Navigate to="/" replace={true} />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}