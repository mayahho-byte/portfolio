import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BookmarkBar from './components/BookmarkBar'
import Sidebar from './components/Sidebar'
import WalkthroughModal from './components/WalkthroughModal'
import bookmarksData from './data/bookmarks.json'
import type { Category } from './types/index'

const categories = bookmarksData as Category[]

const VISITED_KEY = 'portfolio_visited'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [dropdownLeft, setDropdownLeft] = useState<number>(0)
  const [modalOpen, setModalOpen] = useState<boolean>(
    !localStorage.getItem(VISITED_KEY)
  )

  const currentCategory = categories.find(c => c.id === selectedCategory) ?? null

  function handleSelectCategory(id: string | null, left: number) {
    setSelectedCategory(id)
    setDropdownLeft(left)
  }

  function handleCloseModal() {
    localStorage.setItem(VISITED_KEY, 'true')
    setModalOpen(false)
  }

  return (
    <div className="flex flex-col h-screen">

      {/* モーダルを最上位に配置 */}
      {modalOpen && <WalkthroughModal onClose={handleCloseModal} />}

      <div className="relative">
        <BookmarkBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <Sidebar
          category={currentCategory}
          dropdownLeft={dropdownLeft}
          onClose={() => handleSelectCategory(null, 0)}
        />
      </div>

      <main className="flex-1 overflow-auto bg-white">
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}