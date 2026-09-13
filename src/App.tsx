import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BookmarkBar from './components/BookmarkBar'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* 上部：BookmarkBar */}
      <BookmarkBar />

      {/* 下部：SidebarとメインエリアをHorizontalに並べる */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* メインエリア：ルーティングで切り替わる部分 */}
        <main className="flex-1 overflow-auto bg-white">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}