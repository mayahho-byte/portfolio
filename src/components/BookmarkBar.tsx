import { useRef } from 'react'
import type { Category } from '../types/index'

type Props = {
  categories: Category[]
  selectedCategory: string | null
  onSelectCategory: (id: string | null, left: number) => void
}

export default function BookmarkBar({ categories, selectedCategory, onSelectCategory }: Props) {
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  function handleClick(id: string) {
    if (selectedCategory === id) {
      onSelectCategory(null, 0)
    } else {
      const btn = buttonRefs.current[id]
      const left = btn ? btn.getBoundingClientRect().left : 0
      onSelectCategory(id, left)
    }
  }

  return (
    <div className="h-10 bg-gray-800 flex items-center px-4 gap-1">
      {categories.map(category => (
        <button
          key={category.id}
          ref={el => { buttonRefs.current[category.id] = el }}
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