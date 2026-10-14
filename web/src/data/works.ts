export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "营销推广与转化优化",
        "tagline": "推广策划｜品牌内容｜渠道组合｜AI分析",
        "items": [
          {
            "name": "AI资讯产品营销推广与转化优化",
            "meta": "AI Product Marketing & Conversion Optimization",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "推广策划：问卷与反馈转为卖点、线上线下活动",
              "品牌内容：100+条内容，达人筛选与物料核对",
              "渠道优化：标题、首图及内容A/B测试，调整预算",
              "AI复盘：注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "客户沟通与推广落地",
        "tagline": "市场研究｜客户对接｜活动执行｜渠道合作",
        "items": [
          {
            "name": "AI教育产品客户沟通与推广落地",
            "meta": "AI Education Client Coordination & Campaign Execution",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "需求研究：100+条反馈，按场景与障碍归类",
              "推广内容：30+篇指南、FAQ及应用案例",
              "客户协同：高校宣讲体验，东南亚合作签署与交接",
              "反馈跟进：10条改进建议；期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品上市与终端传播",
        "tagline": "新品调研｜宣传主题｜内容制作｜门店协同",
        "items": [
          {
            "name": "ZUS Coffee新品上市与终端传播",
            "meta": "ZUS Coffee Product Launch & Retail Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品调研：消费者、社媒与竞品信息转为宣传主题",
              "内容制作：50条Instagram，拍摄剪辑与英文文案",
              "终端协同：FamilyMart物料、门店信息及推广排期",
              "传播复盘：15+次复盘；账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Marketing & Conversion",
        "tagline": "Plans · Brand Content · Channels · AI",
        "items": [
          {
            "name": "AI Product Marketing & Conversion Optimization",
            "meta": "AI Product Marketing & Conversion Optimization",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Planning: surveys and feedback informed campaign messages",
              "Content: 100+ posts, creator screening and asset checks",
              "Channels: A/B tests informed budget adjustments",
              "AI review: registrations +50% vs prior week; first-topic rate approx. +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "Clients & Campaign Execution",
        "tagline": "Research · Clients · Events · Partnerships",
        "items": [
          {
            "name": "AI Education Client Coordination & Campaign Execution",
            "meta": "AI Education Client Coordination & Campaign Execution",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Research: 100+ feedback items grouped by use case and barrier",
              "Content: 30+ guides, FAQs and use cases",
              "Coordination: university trials and Southeast Asia handoff",
              "Follow-up: 10 suggestions; feature usage +30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Launch & Retail Communication",
        "tagline": "Research · Production · Stores · Reviews",
        "items": [
          {
            "name": "ZUS Coffee Product Launch & Retail Communication",
            "meta": "ZUS Coffee Product Launch & Retail Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: consumer, social and competitor inputs shaped themes",
              "Content: 50 Instagram posts, production and English copy",
              "Retail: FamilyMart materials, store details and schedules",
              "Reviews: 15+ reviews; 11k+ account follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
