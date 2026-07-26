// ============================================================
// UptimeFlare 完整配置文件（已根据你的站点定制）
// 项目地址：https://github.com/lyc8503/UptimeFlare
// 监控站点：主站、博客、图床、订阅管理系统
// ============================================================

// 引入类型定义（不要修改这行）
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

// ============================================================
// 1. 状态页面配置（页面标题、导航栏链接等）
// ============================================================
const pageConfig: PageConfig = {
  // 状态页面标题（显示在浏览器标签和页面头部）
  title: "我的服务监控面板 - 非洲和尚",
  
  // 导航栏链接（显示在页面顶部，可自由增删）
  links: [
    { link: 'https://github.com/FeiZhouHeShang', label: 'GitHub' },
    { link: 'http://55633000.ccwu.cc', label: '博客' },
    { link: 'http://tc.d15.cc.cd', label: '图床' },
    { link: 'http://dy.mxdl.ccwu.cc', label: '订阅系统' },
    // highlight: true 会让该链接高亮显示（突出主要链接）
    { link: 'mailto:5563000@qq.com', label: '联系站长', highlight: true },
  ],
}

// ============================================================
// 2. 监控项配置（核心：定义要监控的所有服务）
// ============================================================
const workerConfig: WorkerConfig = {
  // -------- 监控项列表（按需增删） --------
  monitors: [
    // =============================================
    // 监控项 1：主站 (kk.mxdl.ccwu.cc)
    // =============================================
    {
      id: 'kk_main_site',           // 唯一标识符（一旦确定不要再改，否则历史数据会丢失）
      name: '🌐 主站 (kk.mxdl.ccwu.cc)', // 显示名称（支持 emoji）
      method: 'GET',                // HTTP 请求方法（GET/POST/PUT 等）
      target: 'http://kk.mxdl.ccwu.cc/', // 监控目标 URL
      tooltip: '主站首页，基于 Firefly 博客模板', // 鼠标悬停时的提示
      statusPageLink: 'http://kk.mxdl.ccwu.cc/', // 状态页点击后跳转的链接
      expectedCodes: [200, 301, 302], // 认为正常的 HTTP 状态码（200/301/302 都算正常）
      timeout: 10000,               // 超时时间（毫秒），默认 10000
      // 如果响应内容必须包含某关键词才认为正常（取消注释启用）
      // responseKeyword: '欢迎访问',
      // 如果响应内容包含某关键词则认为异常（取消注释启用）
      // responseForbiddenKeyword: 'error',
    },

    // =============================================
    // 监控项 2：博客 (55633000.ccwu.cc/博客)
    // ⚠️ 注意：URL 中的中文建议使用 URL 编码
    //    "博客" 的 UTF-8 编码为 %E5%8D%9A%E5%AE%A2
    //    你也可以直接在服务端改成 /blog 英文路径
    // =============================================
    {
      id: 'blog_site',
      name: '📝 个人博客 ',
      method: 'GET',
      target: 'https://55633000.ccwu.cc', // URL 编码版本
      // 如果你服务端用的是英文路径 /blog，改成下面这行（注释掉上面那行）：
      // target: 'https://55633000.ccwu.cc/blog',
      tooltip: '个人博客，分享技术和生活',
      statusPageLink: 'https://55633000.ccwu.cc/%E5%8D%9A%E5%AE%A2',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },

    // =============================================
    // 监控项 3：图床 (55633000.ccwu.cc/图床)
    // =============================================
    {
      id: 'image_hosting_site',
      name: '🖼️ 图床 ',
      method: 'GET',
      target: 'https://tc.d15.cc.cd', // URL 编码版本
      // 如果你服务端用的是英文路径 /image，改成下面这行：
      // target: 'https://55633000.ccwu.cc/image',
      tooltip: '个人图床，基于 Cloudflare 存储',
      statusPageLink: 'https://55633000.ccwu.cc/%E5%9B%BE%E5%BA%8A',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },

    // =============================================
    // 监控项 4：订阅管理系统 (dy.mxdl.ccwu.cc)
    // =============================================
    {
      id: 'dy_subscribe_system',
      name: '📡 订阅管理系统 (dy.mxdl.ccwu.cc)',
      method: 'GET',
      target: 'http://dy.mxdl.ccwu.cc/',
      tooltip: '订阅管理系统（如 RSS 订阅等）',
      statusPageLink: 'http://dy.mxdl.ccwu.cc/',
      expectedCodes: [200, 301, 302],
      timeout: 10000,
    },

    // =============================================
    // 如果你想监控 TCP 端口（例如 SSH、数据库），可以参考下面的示例
    // =============================================
    // {
    //   id: 'ssh_monitor',
    //   name: '🔒 SSH 服务 (22端口)',
    //   method: 'TCP_PING',           // 注意：TCP 监控使用 'TCP_PING'
    //   target: '你的服务器IP:22',      // 格式：IP:端口
    //   tooltip: '服务器 SSH 端口',
    //   statusPageLink: 'ssh://你的服务器IP',
    //   timeout: 5000,
    // },
  ],

  // -------- 通知配置（可选，不配置则不发送告警） --------
  notification: {
    // 示例：Telegram 机器人通知（按需配置）
    webhook: {
      // ⚠️ 替换为你的 Telegram Bot API URL
      url: 'https://api.telegram.org/bot你的BotToken/sendMessage',
      // payloadType: 'param' | 'json' | 'x-www-form-urlencoded'
      // 'param': 将 payload 拼接到 URL 参数
      // 'json': 以 JSON 格式 POST 发送
      // 'x-www-form-urlencoded': 以表单格式 POST 发送（Telegram 通常用这个）
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: '你的聊天ID',  // 可以是群组 ID 或个人 ID
        text: '$MSG',          // $MSG 会被自动替换为告警消息
        // 你可以添加更多参数，例如 disable_notification: true
      },
      timeout: 10000,
    },
    // 时区设置（影响通知消息中的时间显示）
    timeZone: 'Asia/Shanghai',
    // 宽限期（分钟）：服务连续宕机 N 分钟后才发送通知，避免误报
    gracePeriod: 5,
  },

  // -------- 高级设置（一般保持默认即可） --------
  // 监控间隔（单位：秒），默认 60 秒
  // 如果你的 Cloudflare 免费额度紧张，可调大到 120 或 300
  // checkInterval: 120,
}

// ============================================================
// 3. 维护窗口配置（可选）
// 当服务器需要维护时，在状态页显示维护公告，并暂停告警
// ============================================================
const maintenances: MaintenanceConfig[] = [
  // 示例：如果你计划在 2026-08-01 维护服务器，可以启用下面的配置
  // {
  //   // 受影响的监控项 ID（不指定则所有监控项都显示维护状态）
  //   monitors: ['kk_main_site', 'blog_site', 'image_hosting_site', 'dy_subscribe_system'],
  //   title: '⏳ 计划维护中',           // 维护标题
  //   body: '服务器正在升级，预计 2 小时内恢复', // 详细说明
  //   start: '2026-08-01T02:00:00+08:00', // 维护开始时间（ISO 8601 格式）
  //   end: '2026-08-01T04:00:00+08:00',   // 维护结束时间（可选）
  //   color: 'blue',                     // 颜色: 'yellow' | 'blue' | 'red' | 'green'
  // },
]

// ============================================================
// 导出配置（不要修改这行，保持原样）
// ============================================================
export { maintenances, pageConfig, workerConfig }
