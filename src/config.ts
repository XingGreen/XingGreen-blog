// 统一配置系统 - 参考Mizuki主题配置架构
// 用于管理站点信息、主题设置、布局配置和功能开关

// 站点基本信息
export const siteConfig = {
  title: 'XingGreen Blog',
  description: 'A beautiful Astro blog with anime background',
  author: 'XingGreen',
  siteUrl: 'http://localhost:4323', // 站点地址
  language: 'zh-CN',
  timezone: 'Asia/unknown',
  favicon: '/favicon.png',
  // 导航菜单配置
  navMenu: [
    { name: '主页', href: '/', ariaLabel: '前往主页' },
    { name: '归档', href: '/blog', ariaLabel: '查看文章归档' },
    { name: '友链', href: '/friends', ariaLabel: '查看友情链接' },
    { name: '联系我', href: '/contact', ariaLabel: '联系博客作者' },
  ],
};

// 主题设置
export const themeConfig = {
  // 主题颜色
  colors: {
    primary: '#c5ffb7',
    secondary: '#85d4ff',
    accent: '#98fb98',
  },
  // 默认主题模式 (light/dark/auto)
  defaultMode: 'light',
  // 是否启用主题切换
  enableThemeSwitch: true,
  // 是否启用系统主题检测
  enableSystemTheme: true,
  // 背景设置
  background: {
    image: '/background.jpg',
    enableOverlay: true,
    overlayOpacity: 0.1,
  },
};

// 布局配置
export const layoutConfig = {
  // 侧边栏位置 (left/right)
  sidebarPosition: 'left',
  // 文章目录位置 (left/right/auto)
  tocPosition: 'auto',
  // 是否启用响应式布局
  responsive: true,
  // 断点设置
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px',
  },
  // 容器宽度
  containerWidth: {
    default: '1200px',
    large: '1400px',
  },
};

// 侧边栏组件配置
export const sidebarLayoutConfig = [
  // 左侧边栏组件
  {
    position: 'left',
    components: [
      {
        name: 'Profile',
        enabled: true,
        order: 1,
        config: {
          avatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=483165474&spec=640&img_type=jpg',
          name: 'XingGreen',
          bio: '热爱技术，分享生活',
          socialLinks: [
        { name: 'GitHub', url: 'https://github.com/XingGreen', icon: 'code' },
        { name: 'Bilibili', url: 'https://space.bilibili.com/1342082835', icon: 'play_circle' },
      ],
        },
      },
      {
        name: 'CategoryList',
        enabled: true,
        order: 2,
        config: {
          title: '分类',
        },
      },
      {
        name: 'TagCloud',
        enabled: true,
        order: 3,
        config: {
          title: '标签云',
          maxTags: 20,
        },
      },
    ],
  },
  // 右侧边栏组件
  {
    position: 'right',
    components: [
      {
        name: 'Search',
        enabled: true,
        order: 1,
        config: {
          placeholder: '搜索文章...',
        },
      },
      {
        name: 'RecentPosts',
        enabled: true,
        order: 2,
        config: {
          title: '最新文章',
          maxPosts: 5,
        },
      },
      {
        name: 'SiteStats',
        enabled: true,
        order: 3,
        config: {
          title: '站点统计',
        },
      },
    ],
  },
];

// 功能开关配置
export const featureConfig = {
  // 搜索功能
  search: {
    enabled: true,
    provider: 'fusejs', // fusejs/pagefind
  },
  // 评论系统
  comment: {
    enabled: false,
    provider: 'waline', // waline/giscus/utterances
    config: {
      serverURL: 'https://waline.vercel.app',
      placeholder: '留下你的评论吧~',
      requiredMeta: ['nick', 'mail'],
      login: 'enable',
      pageSize: 10,
      emoji: [
        'https://cdn.jsdelivr.net/npm/@waline/emojis@1.0.1/weibo/index.json',
        'https://cdn.jsdelivr.net/npm/@waline/emojis@1.0.1/alus/index.json'
      ],
    },
  },
  // 阅读时间估算
  readingTime: {
    enabled: true,
    wordsPerMinute: 300,
  },
  // RSS订阅
  rss: {
    enabled: true,
    maxItems: 20,
  },
  // 代码高亮
  codeHighlight: {
    enabled: true,
    theme: 'github-dark',
    enableCopy: true,
    enableLineNumbers: true,
    enableCodeGroup: true,
  },
  // 数学公式
  math: {
    enabled: true,
    provider: 'katex',
  },
};

// 友链配置
export const friendsConfig = [
  {
    name: 'vahiru的博客',
    url: 'https://vahiru.is-cute.cat',
    description: '这是vahiru的博客',
    avatar: 'https://via.placeholder.com/80'
  },
];

// 导出所有配置
export default {
  siteConfig,
  themeConfig,
  layoutConfig,
  sidebarLayoutConfig,
  featureConfig,
  friendsConfig,
};
