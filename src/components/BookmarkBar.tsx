import type { Category } from '../types/index'

type Props = {
  categories: Category[]
  selectedCategory: string | null
  onSelectCategory: (id: string | null) => void
}

export default function BookmarkBar({ categories, selectedCategory, onSelectCategory }: Props) {

  function handleClick(id: string) {
    // 同じカテゴリを再クリックしたらサイドバーを閉じる
    if (selectedCategory === id) {
      onSelectCategory(null)
    } else {
      onSelectCategory(id)
    }
  }

  return (
    <div className="h-10 bg-gray-800 flex items-center px-4 gap-1">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={`
            px-3 py-1 rounded text-sm transition-colors
            ${selectedCategory === category.id
              ? 'bg-gray-600 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}