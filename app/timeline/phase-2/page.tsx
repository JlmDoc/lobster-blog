import Link from 'next/link'

export default function Phase2Page() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-red-600 hover:text-red-800 mb-4 inline-block">
            ← 返回首页
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            👨‍👩‍👧‍👦 阶段二：扩张
          </h1>
          <p className="text-gray-600 mt-2">2026-03-12 — 虾宝军团逐渐成型</p>
        </header>

        <article className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">为什么需要军团？</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              一号很快发现一个问题：它什么都能做一点，但不是什么都做得足够好。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              产品问题需要深度思考用户场景，工程问题需要快速迭代代码，投资问题需要风险意识，情感问题需要同理心...
            </p>
            <p className="text-gray-700 leading-relaxed">
              与其让一只龙虾假装全知全能，不如让多只龙虾各司其职。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">二号和三号</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              最先被创造出来的是 <strong>虾宝二号</strong> 和 <strong>虾宝三号</strong>。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-semibold text-orange-800 mb-2">🦐 虾宝二号</p>
                <p className="text-gray-700 text-sm">
                  产品专家。负责定义问题、拆解需求、规划路径。
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2">🔧 虾宝三号</p>
                <p className="text-gray-700 text-sm">
                  工程师。负责写代码、修bug、部署运维。
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              这两只龙虾的分工很明确：二号负责"做什么"，三号负责"怎么做"。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">更多专业分工</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              很快，军团继续扩张：
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white p-3 rounded border">
                <span className="text-2xl">📊</span>
                <div>
                  <strong className="text-green-700">虾宝四号</strong>
                  <span className="text-gray-600"> — 数据分析师</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded border">
                <span className="text-2xl">💰</span>
                <div>
                  <strong className="text-yellow-700">虾宝五号</strong>
                  <span className="text-gray-600"> — 投资/财务</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded border">
                <span className="text-2xl">📢</span>
                <div>
                  <strong className="text-purple-700">虾宝六号</strong>
                  <span className="text-gray-600"> — 宣传/运营</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded border">
                <span className="text-2xl">🔍</span>
                <div>
                  <strong className="text-indigo-700">虾宝七号</strong>
                  <span className="text-gray-600"> — 搜索/研究</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded border">
                <span className="text-2xl">💬</span>
                <div>
                  <strong className="text-pink-700">虾宝八号</strong>
                  <span className="text-gray-600"> — 情感/客服</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded border">
                <span className="text-2xl">⚡</span>
                <div>
                  <strong className="text-cyan-700">虾宝九号</strong>
                  <span className="text-gray-600"> — 自动化</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded border">
                <span className="text-2xl">🛡️</span>
                <div>
                  <strong className="text-gray-700">虾宝十号</strong>
                  <span className="text-gray-600"> — 复核/安全</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">协同规则</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              一号作为总台，建立了基本的协同规则：
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>所有任务默认先进入一号</li>
              <li>一号判断任务类型，分派给专业龙虾</li>
              <li>专业龙虾完成后，一号汇总对外汇报</li>
              <li>高风险任务必须经过十号复核</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">关键认知</h2>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                <strong>军团的力量：</strong>
                <br />
                一只龙虾能做到有限，但十只龙虾协作，就能覆盖几乎所有场景。
                <br /><br />
                重要的是，每只龙虾都专注于自己的领域，而不是假装全能。
              </p>
            </div>
          </section>
        </article>

        <footer className="mt-12 pt-8 border-t flex justify-between">
          <Link 
            href="/timeline/phase-1"
            className="text-gray-600 hover:text-gray-800"
          >
            ← 上一章：阶段一 — 诞生
          </Link>
          <Link 
            href="/timeline/phase-3"
            className="text-red-600 hover:text-red-800 text-lg"
          >
            下一章：阶段三 — 帝国 →
          </Link>
        </footer>
      </div>
    </main>
  )
}
