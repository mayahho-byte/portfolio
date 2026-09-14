import { useState, useRef, useEffect } from 'react'

type DocItem = {
  label: string
  url: string
}

const docs: DocItem[] = [
  { label: 'English Resume', url: '#' },
  { label: 'English CV', url: '#' },
  { label: '日本語履歴書', url: '#' },
  { label: '日本語職務経歴書', url: '#' },
]

export default function ShortcutBar() {
  const [docsOpen, setDocsOpen] = useState(false)
  const docsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (docsRef.current && !docsRef.current.contains(e.target as Node)) {
        setDocsOpen(false)
      }
    }

    if (docsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [docsOpen])

  return (
    <div className="flex items-center gap-3">

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/maya-tanimoto-111ab8155/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        LinkedIn
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/mayahho-byte"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        GitHub
      </a>

      {/* Resumeドロップダウン */}
      <div ref={docsRef} className="relative">
        <button
          onClick={() => setDocsOpen(prev => !prev)}
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
        >
          Resume
          <span className="text-xs">▾</span>
        </button>

        {docsOpen && (
          <div className="absolute top-full left-0 mt-1 w-44 bg-white shadow-lg border border-gray-200 rounded z-50">
            {docs.map(doc => (
              <a
                key={doc.label}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {doc.label}
              </a>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}