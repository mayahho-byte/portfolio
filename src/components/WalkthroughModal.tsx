import { useEffect } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  onClose: () => void
}

export default function WalkthroughModal({ onClose }: Props) {
  // 背景スクロールを無効化
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
      onClick={onClose}
    >
      {/* 外側ラッパー：角丸・影・全体の最大高さを設定し、overflow-hiddenで内部のはみ出し（スクロールバー）を切り抜く */}
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* 内側コンテナ：縦スクロールとパディングを担当 */}
        <div className="overflow-y-auto p-8">
          {/* タイトル */}
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            Welcome to Maya's Portfolio
          </h2>
          <p className="text-xs text-gray-400 mb-6">JP below</p>

          {/* EN セクション */}
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Welcome! This portfolio is designed as a browser-style interface.
            Use the Bookmark Bar at the top to explore my projects and profile.
          </p>

          {/* How to navigate */}
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            How to navigate
          </h3>
          <ol className="text-sm text-gray-600 space-y-2 mb-6">
            <li className="flex gap-3">
              <span className="font-semibold text-blue-500 shrink-0">①</span>
              <span><span className="font-medium">Bookmark Bar</span> – Select a category</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-500 shrink-0">②</span>
              <span><span className="font-medium">Sidebar</span> – Choose an app or link</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-500 shrink-0">③</span>
              <span><span className="font-medium">Main Area</span> – View the content</span>
            </li>
          </ol>

          {/* What you'll find */}
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            What you'll find
          </h3>
          <ul className="text-sm text-gray-600 space-y-2 mb-8">
            <li className="flex gap-2">
              <span className="shrink-0">・</span>
              <span><span className="font-medium">Shortcuts</span> → Profile, LinkedIn, and resume links</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0">・</span>
              <span><span className="font-medium">Scroll down</span> → Highlights of projects and content available through the bookmarks and shortcuts</span>
            </li>
          </ul>

          {/* 区切り線 */}
          <div className="border-t border-gray-200 mb-6" />

          {/* 日本語セクション */}
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            ようこそ！このポートフォリオはブラウザ風UIで構成されています。
            上部のブックマークバーからプロジェクトやプロフィールを探索できます。
          </p>

          {/* 操作方法 */}
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            操作方法
          </h3>
          <ol className="text-sm text-gray-600 space-y-2 mb-6">
            <li className="flex gap-3">
              <span className="font-semibold text-blue-500 shrink-0">①</span>
              <span><span className="font-medium">Bookmark Bar</span> – カテゴリを選択</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-500 shrink-0">②</span>
              <span><span className="font-medium">Sidebar</span> – アプリやリンクを選択</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-blue-500 shrink-0">③</span>
              <span><span className="font-medium">Main Area</span> – コンテンツを表示</span>
            </li>
          </ol>

          {/* このポートフォリオで見られるもの */}
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            このポートフォリオで見られるもの
          </h3>
          <ul className="text-sm text-gray-600 space-y-2 mb-8">
            <li className="flex gap-2">
              <span className="shrink-0">・</span>
              <span><span className="font-medium">Shortcuts</span> → Profile、LinkedIn、Resumeへのリンク</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0">・</span>
              <span><span className="font-medium">下にスクロール</span> → BookmarkやShortcutsからアクセスできるプロジェクトやコンテンツの概要を掲載しています</span>
            </li>
          </ul>

          {/* Got it ボタン */}
          <button
            onClick={onClose}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}