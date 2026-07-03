# Cloudflare Pages 部署指南

## 📋 前置准备

1. ✅ 代码已推送到 GitHub
2. ✅ Cloudflare 账户已登录
3. ✅ 域名 `media-tech.ca` 已在 Cloudflare 管理

## 🚀 部署步骤

### 1. 连接 Git 仓库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 "Pages & Forms" → "Pages"
3. 点击 "Create a project" → "Connect to Git"
4. 授权 GitHub（如需要）
5. 选择 `simonlee0506/media-tech-site` 仓库
6. 点击 "Begin setup"

### 2. 配构建设置

```
Project name: media-tech-site
Production branch: main
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
```

### 3. 环境变量（可选）

添加以下环境变量：

```
NEXT_PUBLIC_SITE_URL=https://media-tech.ca
NODE_VERSION=18
```

### 4. 点击 "Save and Deploy"

等待部署完成（约 2-5 分钟）

## 🌐 配置自定义域名

### 方式 1：使用 Cloudflare 域名（推荐）

1. 部署完成后，进入项目设置
2. 点击 "Custom domains"
3. 点击 "Set up a custom domain"
4. 输入 `media-tech.ca`
5. Cloudflare 会自动配置 DNS

### 方式 2：添加 CNAME 记录

1. 在 Cloudflare DNS 设置中添加：
   ```
   类型: CNAME
   名称: @ (或留空)
   目标: media-tech-site.pages.dev
   ```

2. 或者在 Cloudflare Pages 项目中：
   - 进入 "Custom domains"
   - 添加 `media-tech.ca`
   - Cloudflare 会自动生成 CNAME 记录

## ✅ 验证部署

部署完成后：

1. 访问 `https://media-tech-site.pages.dev` 查看预览
2. 等待 DNS 传播（通常 5-30 分钟）
3. 访问 `https://media-tech.ca` 确认正常

## 🔄 自动部署

配置后，每次推送到 `main` 分支都会自动重新部署。

## ⚙️ 高级配置

### 构建优化

在 Cloudflare Pages 设置中，确保：

```
Node.js 版本: 18
构建超时: 15 分钟
内存: 1024 MB
```

### 重定向规则

在 `wrangler.toml` 或 Cloudflare Pages 设置中添加：

```toml
[[redirects]]
from = "/*"
to = "/en/:splat"
status = 307
force = false
```

## 📊 监控

- 访问 Cloudflare Pages Dashboard 查看构建日志
- 检查 Analytics 查看访问数据
- 设置构建失败通知

## 🐛 常见问题

### 构建失败

1. 检查 Node.js 版本是否设置为 18
2. 检查 `package.json` 中的脚本是否正确
3. 查看构建日志获取详细错误

### DNS 未生效

1. 使用 `dig media-tech.ca` 检查 DNS 解析
2. 清除浏览器缓存
3. 等待 DNS 传播（最长 48 小时，通常更快）

### 路由问题

1. 确保 `middleware.ts` 配置正确
2. 检查 `next.config.ts` 中的 `trailingSlash` 设置
3. 验证国际化路由配置

## 📞 获取帮助

如果遇到问题：
- 查看 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages)
- 检查 GitHub 仓库的 Issues
- 联系 Cloudflare 支持