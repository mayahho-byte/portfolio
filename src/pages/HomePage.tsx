import { useNavigate } from 'react-router-dom'
import ShortcutBar from '../components/ShortcutBar'

type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  status: 'live' | 'coming-soon'
}

const projects: Project[] = [
  {
    id: 'project-1a',
    title: 'Project 1-A: 勤怠・有給管理',
    description: '出退勤打刻・有給申請・管理者承認を行う業務システム',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'live',
  },
  {
    id: 'project-1b',
    title: 'Project 1-B: 給与計算システム',
    description: 'Project 1-AのCSVをもとに給与計算・明細生成を行うシステム',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'coming-soon',
  },
  {
    id: 'project-2',
    title: 'Project 2: アノテーション業務アプリ',
    description: '実務経験をもとに再現したAIアノテーション業務ツール',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'coming-soon',
  },
  {
    id: 'project-3',
    title: 'Project 3: 多肉植物販売ECサイト',
    description: '商品管理・カート・注文・モック決済を含む個人事業向けECサイト',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    status: 'coming-soon',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  function handleWalkthroughClick() {
    console.log('Walkthrough clicked')
  }

  return (
    <div className="min-h-full bg-gray-50 flex flex-col items-center pt-6 px-8">

      {/* 検索バー風装飾 */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-6 py-3 shadow-sm">
          <span className="text-gray-400 text-sm mr-3">🔍</span>
          <span className="text-gray-500 text-sm flex-1">Maya's Portfolio</span>
        </div>
      </div>

      {/* ShortcutBar */}
      <div className="mb-8">
        <ShortcutBar />
      </div>

      {/* カードエリア全体 */}
      <div className="w-full max-w-5xl flex flex-col gap-4">

        {/* 上段 */}
        <div className="flex gap-4">

          {/* Walkthroughカード（左・大） */}
          <button
            onClick={handleWalkthroughClick}
            className="w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="text-2xl mb-3">🗺</div>
              <h2 className="text-base font-semibold text-gray-800 mb-3">
                How to use this portfolio
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">
                This is a portfolio built as a custom browser UI. My profile is real. The apps and webpages are self-built practice projects. The annotation tool is a mock recreated from real work experience.
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                こちらはカスタムブラウザ風UIで作ったポートフォリオです。私自身のプロフィールは本物ですが、業務ツールとウェブサイトは練習として自作したものです。アノテーションツールは実務経験をもとに再現したものとなっております。
              </p>
            </div>
            <span className="text-xs text-blue-500 hover:text-blue-700 mt-4 block">
              Learn more →
            </span>
          </button>

          {/* Projectカード 2×2グリッド */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xs font-semibold text-gray-800 leading-snug">{project.title}</h3>
                    {project.status === 'coming-soon' && (
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full ml-2 shrink-0">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 下段：About Meカード（横長） */}
        <button
          onClick={() => navigate('/about')}
          className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-left hover:shadow-md transition-shadow flex items-center gap-6"
        >
          <div className="text-3xl">👩‍💻</div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">About Me</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Japanese Team Lead in AI safety evaluation, particularly in natural-language interactions. Rekindled my passion for coding through a cybersecurity project that ran alongside my work, which ultimately inspired me to build my own portfolio. Growing up in Osaka, worked in Tokyo, and now Based in Kyushu.
            </p>
          </div>
          <span className="text-xs text-blue-500 hover:text-blue-700 shrink-0">
            Learn more →
          </span>
        </button>

      </div>
    </div>
  )
}
