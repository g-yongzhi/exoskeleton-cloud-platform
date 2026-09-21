# 接口线索记录

以下接口来自源码 PDF 中可识别的 JavaScript 调用痕迹，仅作为后续恢复后端或整理接口文档时的参考。

## 设备管理

```text
GET  /api/devices/{deviceId}
POST /api/devices/mode
POST /api/devices/bind
```

可识别字段：

- `id`
- `battery`
- `usageTime`
- `mode`
- `fallEvents`

## 家属共享

```text
GET    /api/family/authorized
GET    /api/family/invite/qrcode
POST   /api/family/invite/phone
GET    /api/family/authorized/{id}
POST   /api/family/authorized/{id}/permission
DELETE /api/family/authorized/{id}
```

## 健康报告

```text
GET  /api/reports/{period}
POST /api/reports/generate
GET  /api/reports/{reportId}/download
```

## 实时数据

```text
ws://localhost:8080
```

PDF 中能看到 WebSocket 打开、接收消息、错误、关闭后重连等逻辑。
