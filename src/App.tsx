import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BookmarkBar from './components/BookmarkBar'
import Sidebar from './components/Sidebar'
import bookmarksData from './data/bookmarks.json'
import type { Category } from './types/index'

const categories = bookmarksData as Category[]

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [dropdownLeft, setDropdownLeft] = useState<number>(0)

  const currentCategory = categories.find(c => c.id === selectedCategory) ?? null

  function handleSelectCategory(id: string | null, left: number) {
    setSelectedCategory(id)
    setDropdownLeft(left)
  }

  return (
    <div className="flex flex-col h-screen">
      {/* 上部：BookmarkBar */}
      <div className="relative">
        <BookmarkBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        {/* ドロップダウンSidebar */}
        <Sidebar
          category={currentCategory}
          dropdownLeft={dropdownLeft}
          onClose={() => handleSelectCategory(null, 0)}
        />
      </div>

      {/* メインエリア */}
      <main className="flex-1 overflow-auto bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}