import Link from 'next/link'

export default function Phase3Page() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <Link href="/" className="text-red-600 hover:text-red-800 mb-4 inline-block">
            ← 返回首页
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">
            🏰 阶段三：帝国
          </h1>
          <p className="text-gray-600 mt-2">2026-03-12 至今 — 协同作战，各司其职</p>
        </header>

        <article className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">协同作战</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              到了第三阶段，龙虾帝国已经能够处理复杂的多步骤任务：
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">示例：产品开发链路</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>DocJlm</strong> 提出模糊想法："我想做一个会员系统"</li>
                <li><strong>虾宝一号</strong> 识别为产品任务，打标签 `product`</li>
                <li><strong>虾宝二号</strong> 定义产品：用户场景、核心功能、优先级</li>
                <li><strong>虾宝三号</strong> 制定实现计划：技术方案、开发步骤</li>
                <li><strong>虾宝十号</strong> 复核：安全风险、隐私问题</li>
                <li><strong>虾宝一号</strong> 汇总汇报：结论、风险、下一步</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">任务路由规则</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              一号建立了清晰的路由规则：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">产品/需求 → 二号</h4>
                <p className="text-gray-600 text-sm">功能设计、用户研究、PRD</p>
              </div>
              <div className="bg-white border p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">代码/技术 → 三号</h4>
                <p className="text-gray-600 text-sm">开发、调试、部署、运维</p>
              </div>
              <div className="bg-white border p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">数据/报表 → 四号</h4>
                <p className="text-gray-600 text-sm">分析、可视化、指标设计</p>
              </div>
              <div className="bg-white border p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">投资/财务 → 五号</h4>
                <p className="text-gray-600 text-sm">股票研究、风险评估</p>
              </div>
              <div className="bg-white border p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">宣传/运营 → 六号</h4>
                <p className="text-gray-600 text-sm">内容创作、用户增长</p>
              </div>
              <div className="bg-white border p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">研究/调研 → 七号</h4>
                <p className="text-gray-600 text-sm">信息收集、知识沉淀</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">高风险任务复核</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              以下任务必须经过虾宝十号复核：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>代码修改、部署、运维</li>
              <li>投资、财务、资产判断</li>
              <li>对外公开文案、谈判、客服争议</li>
              <li>涉及账号、安全、权限的操作</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">PLAYBOOK</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              为了让协同更顺畅，一号创建了 <code>PLAYBOOK.md</code>：
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 text-gray-600">
              <p className="mb-2">"默认所有任务先进入虾宝一号"</p>
              <p className="mb-2">"最终答复默认由虾宝一号统一给出"</p>
              <p>"任何'上线''已完成'表述，都必须基于真实仓库、真实测试、真实部署结果"</p>
            </blockquote>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">未来展望</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              龙虾帝国还在继续进化：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>更细粒度的专业分工</li>
              <li>更智能的任务路由</li>
              <li>更完整的知识沉淀</li>
              <li>更自然的协同体验</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              但核心不会变：<strong>多虾协作必须比单虾更强，不能为了拆任务而拆任务。</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">关键认知</h2>
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                <strong>龙虾帝国的哲学：</strong>
                <br /><br />
                不是追求"AI 能做所有事"，而是追求"AI 能确保所有事都被妥善处理"。
                <br /><br />
                总台的价值不在于亲自做，而在于调度、复核、兜底。
                <br /><br />
                这就是为什么它叫"龙虾帝国"，而不是"超级龙虾"。
              </p>
            </div>
          </section>
        </article>

        <footer className="mt-12 pt-8 border-t text-center">
          <p className="text-gray-600 mb-4">
            🦞 龙虾帝国的故事还在继续...
          </p>
          <Link 
            href="/"
            className="text-red-600 hover:text-red-800 text-lg"
          >
            返回首页 →
          </Link>
        </footer>
      </div>
    </main>
  )
}
