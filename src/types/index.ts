// ブックマーク1件の型
export type Bookmark = {
  id: string           // 一意のID（例: "project-1a"）
  label: string        // 表示名（例: "勤怠・有給管理"）
  url: string          // リンク先URL
  category: string     // カテゴリID（例: "work"）
  displayMode: 'iframe' | 'blank'  // 表示方法
  description?: string // 説明文（省略可）
  tags?: string[]      // 技術タグ（省略可）
}

// カテゴリ1件の型
export type Category = {
  id: string           // 一意のID（例: "work"）
  label: string        // 表示名（例: "業務ツール"）
  bookmarks: Bookmark[] // そのカテゴリに属するブックマーク一覧
}