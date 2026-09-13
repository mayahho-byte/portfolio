import { useEffect, useRef } from 'react'
import type { Category, Bookmark } from '../types/index'

type Props = {
  category: Category | null
  dropdownLeft: number
  onClose: () => void
}

function handleBookmarkClick(bookmark: Bookmark) {
  if (bookmark.displayMode === 'blank') {
    window.open(bookmark.url, '_blank', 'noopener,noreferrer')
  }
  // iframe の場合は後のSTEPで実装
}

export default function Sidebar({ category, dropdownLeft, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  // ドロップダウンの外側をクリックしたら閉じる
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose()
      }
    }
    if (category) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [category, onClose])

  if (!category) return null

  return (
    <div
      ref={ref}
      style={{ left: dropdownLeft }}
      className="absolute top-full z-50 w-56 bg-white shadow-lg border border-gray-200 rounded-b"
    >
      {/* カテゴリ名 */}
      <div className="px-4 py-2 bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-200">
        {category.label}
      </div>

      {/* ブックマーク一覧 */}
      <div className="py-1">
        {category.bookmarks.map(bookmark => (
          <button
            key={bookmark.id}
            onClick={() => {
              handleBookmarkClick(bookmark)
              onClose()
            }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <span className="text-gray-400">□</span>
            {bookmark.label}
          </button>
        ))}
      </div>
    </div>
  )
}