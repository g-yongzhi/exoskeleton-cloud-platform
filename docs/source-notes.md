# 源码恢复说明

## 来源

当前项目根据本地文件《灵壳外骨骼云平台V1.0-源代码.pdf》整理。

PDF 中能识别到的内容包括：

- `common.css`、设备页样式、健康页样式等 CSS 片段
- `device.html`、`family-sharing.html`、`health-charts.html` 等页面片段
- `device.js`、`family-sharing.js`、`health-report.js`、`main.js`、`setting.js` 等 JavaScript 逻辑片段
- 设备接口调用示例，如 `/api/devices/:id`、`/api/devices/mode`、`/api/devices/bind`
- 家属共享接口调用示例，如 `/api/family/authorized`、`/api/family/invite/phone`
- 报告接口调用示例，如 `/api/reports/:period`、`/api/reports/generate`
- WebSocket 示例：`ws://localhost:8080`

## 恢复策略

PDF 提取后的代码存在空格丢失、选择器粘连、部分页面缺失等问题，因此本仓库没有逐行照搬 PDF 文本，而是根据可确认的页面、模块和接口线索，整理成一个可浏览的静态前端版本。

## 边界

- 当前代码不是完整原始源码。
- 当前代码不包含后端服务。
- 当前代码不证明硬件已完成实时接入。
- 演示数据仅用于页面效果展示。
