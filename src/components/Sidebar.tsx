import type { Category, Bookmark } from '../types/index'

type Props = {
  category: Category | null
}

function handleBookmarkClick(bookmark: Bookmark) {
  // displayMode が 'blank' は常に別タブで開く
  if (bookmark.displayMode === 'blank') {
    window.open(bookmark.url, '_blank', 'noopener,noreferrer')
  }
  // 'iframe' の場合は後のSTEPで実装
}

export default function Sidebar({ category }: Props) {
  // カテゴリが選択されていない場合は非表示
  if (!category) return null

  return (
    <div className="w-56 bg-gray-100 h-full flex flex-col border-r border-gray-200">
      {/* カテゴリ名 */}
      <div className="px-4 py-3 bg-gray-200 text-sm font-semibold text-gray-700 border-b border-gray-300">
        {category.label}
      </div>

      {/* ブックマーク一覧 */}
      <div className="flex-1 overflow-y-auto py-2">
        {category.bookmarks.map(bookmark => (
          <button
            key={bookmark.id}
            onClick={() => handleBookmarkClick(bookmark)}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors"
          >
            {bookmark.label}
          </button>
        ))}
      </div>
    </div>
  )
}