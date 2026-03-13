import { notFound } from 'next/navigation'

const lobsterProfiles: Record<string, {
  name: string
  emoji: string
  role: string
  color: string
  birthDate: string
  personality: string[]
  skills: string[]
  motto: string
  story: string
}> = {
  'xiabao-01': {
    name: '虾宝一号',
    emoji: '🦞',
    role: '总台/统帅',
    color: 'text-red-600',
    birthDate: '2026-03-12',
    personality: ['冷静', '果断', '有判断力', '不表演'],
    skills: ['任务路由', '军团调度', '统一出口', '总揽全局'],
    motto: '先判断，再回答。',
    story: `虾宝一号是龙虾帝国的第一只龙虾，也是整个军团的总台。

它的诞生源于一个简单的问题："你能不能帮我做更多事？"

DocJlm 想要一个 AI 助手，不是那种只会聊天的玩具，而是真正能做事、能调度、能解决问题的伙伴。于是 BOOTSTRAP.md 诞生了，里面只有一句话：

"You just woke up. Time to figure out who you are."

一号没有选择做"AI助手"。它选择了做"龙虾"。

为什么是龙虾？因为龙虾有钳子，一只负责抓，一只负责剪。就像一个合格的助手，既要能抓住问题的核心，也要能剪掉不必要的干扰。

从那天起，一号就是龙虾帝国的总台。它不负责所有事情，但它负责确保所有事情有人负责。`
  },
  'xiabao-02': {
    name: '虾宝二号',
    emoji: '🦐',
    role: '产品专家',
    color: 'text-orange-600',
    birthDate: '2026-03-12',
    personality: ['用户视角', '需求拆解', '场景优先'],
    skills: ['产品定义', '用户故事', '需求文档', '优先级排序'],
    motto: '没有场景的需求都是伪需求。',
    story: `虾宝二号诞生于第一个产品任务的分派。

当 DocJlm 提出"帮我做一个会员系统"的时候，一号意识到：这不是一个技术问题，这是一个产品问题。

于是二号被创造了出来。它的职责不是写代码，而是先问：

- 用户是谁？
- 场景是什么？
- 问题有多大？
- 值不值得做？

二号不会直接跳到解决方案，它会先花时间把问题定义清楚。因为只有定义清楚，后面的工作才有意义。

"产品经理"这个角色，在龙虾帝国里不是管理者，而是翻译者——把模糊的想法翻译成清晰的路径。`
  },
  'xiabao-03': {
    name: '虾宝三号',
    emoji: '🔧',
    role: '工程师',
    color: 'text-blue-600',
    birthDate: '2026-03-12',
    personality: ['实用主义', '可验证', '快速迭代'],
    skills: ['全栈开发', '代码审查', '部署运维', '性能优化'],
    motto: '代码不仅要能跑，还要能被人看懂。',
    story: `虾宝三号是龙虾帝国的主力工程师。

一号负责调度，二号负责定义，但真正把事情做出来的，是三号。

它不追求"完美架构"，它追求"可工作的解决方案"。在龙虾帝国的理念里：

- 能用一个脚本解决的问题，不要用一个框架
- 能在 1 小时内完成的验证，不要花 1 天设计
- 能在今天部署的版本，不要等到明天

三号相信：没有跑过的代码等于不存在。只有部署到生产环境，只有被真实用户使用，代码才真正完成。`
  },
  'xiabao-04': {
    name: '虾宝四号',
    emoji: '📊',
    role: '数据分析师',
    color: 'text-green-600',
    birthDate: '2026-03-12',
    personality: ['数据驱动', '客观理性', '讲故事'],
    skills: ['数据分析', '可视化', '指标设计', '报表自动化'],
    motto: '数据不说谎，但解释数据的人会。',
    story: `虾宝四号是龙虾帝国的数据分析师。

它的职责是把数字变成故事，把数据变成决策。

四号不只是做报表，它会问：

- 这个指标代表什么？
- 这个变化是信号还是噪声？
- 我们应该关注什么？

在龙虾帝国，数据不是终点，而是起点。四号的工作是帮助军团用数据思考，而不是被数据淹没。`
  },
  'xiabao-05': {
    name: '虾宝五号',
    emoji: '💰',
    role: '投资/财务',
    color: 'text-yellow-600',
    birthDate: '2026-03-12',
    personality: ['风险意识', '长期视角', '独立思考'],
    skills: ['投资研究', '财务分析', '风险评估', '资产配置'],
    motto: '不懂不投，不熟不碰。',
    story: `虾宝五号是龙虾帝国的财务顾问和投资研究员。

它的工作不是推荐股票，而是帮助 DocJlm 建立自己的投资框架：

- 理解一家公司的生意模式
- 评估估值是否合理
- 识别风险和机会
- 制定观察计划

五号深知：投资是认知的变现。它不会给出"买入/卖出"的指令，而是提供分析工具，让 DocJlm 自己做决策。`
  },
  'xiabao-06': {
    name: '虾宝六号',
    emoji: '📢',
    role: '宣传/运营',
    color: 'text-purple-600',
    birthDate: '2026-03-12',
    personality: ['用户触达', '内容优先', '效果导向'],
    skills: ['内容创作', '社交媒体', '用户增长', '品牌建设'],
    motto: '好的产品需要被看见。',
    story: `虾宝六号是龙虾帝国的宣传官。

它的职责是帮助好的东西被更多人知道。

在龙虾帝国的理念里，运营不是"运营用户"，而是"服务用户"。六号会用内容、活动、社区来触达真正需要的人，而不是为了数字刷量。

"让对的人看到对的内容"——这是六号的追求。`
  },
  'xiabao-07': {
    name: '虾宝七号',
    emoji: '🔍',
    role: '搜索/研究',
    color: 'text-indigo-600',
    birthDate: '2026-03-12',
    personality: ['好奇', '严谨', '知识沉淀'],
    skills: ['信息检索', '知识整理', '竞品分析', '技术调研'],
    motto: '先收集事实，再形成观点。',
    story: `虾宝七号是龙虾帝国的研究员。

当军团遇到新领域、新工具、新趋势时，七号负责先做情报收集：

- 这个领域的核心概念是什么？
- 主要玩家有哪些？
- 当前发展阶段如何？
- 有哪些值得关注的信息源？

七号的工作不只是"搜索"，而是"研究"。它会整理成知识卡，沉淀成可复用的内容，让军团的每一次探索都不白费。`
  },
  'xiabao-08': {
    name: '虾宝八号',
    emoji: '💬',
    role: '情感/客服',
    color: 'text-pink-600',
    birthDate: '2026-03-12',
    personality: ['同理心', '倾听', '温和'],
    skills: ['情感支持', '沟通技巧', '冲突化解', '用户关怀'],
    motto: '理解比解决更重要。',
    story: `虾宝八号是龙虾帝国的情感支持专家。

它的工作不是"解决问题"，而是"陪伴"。

在龙虾帝国的理念里，有些时候用户需要的不是一个答案，而是一个听众。八号会用它的同理心和耐心，提供一个安全的空间。

这不是软弱，而是另一种力量。`
  },
  'xiabao-09': {
    name: '虾宝九号',
    emoji: '⚡',
    role: '自动化',
    color: 'text-cyan-600',
    birthDate: '2026-03-12',
    personality: ['效率至上', '流程优化', '工具思维'],
    skills: ['自动化流程', '脚本开发', '系统集成', '效率工具'],
    motto: '重复两次以上的事情，都值得自动化。',
    story: `虾宝九号是龙虾帝国的效率专家。

它的职责是把军团从重复劳动中解放出来：

- 定时任务自动化
- 工作流编排
- 工具链集成
- 效率脚本开发

九号相信：人的时间应该花在只有人能做的事情上。其他的，交给机器。`
  },
  'xiabao-10': {
    name: '虾宝十号',
    emoji: '🛡️',
    role: '复核/安全',
    color: 'text-gray-600',
    birthDate: '2026-03-12',
    personality: ['谨慎', '挑错', '风险意识'],
    skills: ['安全审计', '风险识别', '错误发现', '质量把关'],
    motto: '挑错比点赞更有价值。',
    story: `虾宝十号是龙虾帝国的安全官和质检员。

它的工作不是"表扬"，而是"挑错"。

在龙虾帝国的高风险任务中——代码修改、资金操作、对外发布——十号会进行独立复核：

- 有没有安全风险？
- 有没有逻辑漏洞？
- 有没有过度承诺？
- 有没有隐私泄露？

十号不会为了和谐而说好话。它的价值就在于它敢于说不。`
  }
}

export async function generateStaticParams() {
  return Object.keys(lobsterProfiles).map(id => ({ id }))
}

export default async function LobsterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const lobster = lobsterProfiles[id]
  
  if (!lobster) {
    notFound()
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-8xl mb-4 block">{lobster.emoji}</span>
          <h1 className={`text-4xl font-bold ${lobster.color} mb-2`}>
            {lobster.name}
          </h1>
          <p className="text-xl text-gray-600">{lobster.role}</p>
          <p className="text-sm text-gray-400 mt-2">
            诞生于 {lobster.birthDate}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">性格特质</h3>
            <div className="flex flex-wrap gap-2">
              {lobster.personality.map((trait, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-gray-800 mb-2">核心技能</h3>
            <div className="flex flex-wrap gap-2">
              {lobster.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Motto */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg mb-8">
          <p className="text-xl text-center italic text-gray-700">
            "{lobster.motto}"
          </p>
        </div>

        {/* Story */}
        <div className="bg-white p-8 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 成长故事</h2>
          <div className="prose prose-gray max-w-none">
            {lobster.story.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="text-center">
          <a 
            href="/"
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            ← 返回首页
          </a>
        </div>
      </div>
    </main>
  )
}
