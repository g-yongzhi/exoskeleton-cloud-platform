const demo = {
  stats: { steps: 6840, activeMinutes: 146, falls: 0, battery: 85, mode: "步行模式" },
  devices: [
    { id: "LK-EXO-001", name: "设备 #1", battery: 85, mode: "步行模式", status: "在线", usage: "2小时30分钟" },
    { id: "LK-EXO-002", name: "设备 #2", battery: 62, mode: "训练模式", status: "离线", usage: "48分钟" },
  ],
  fallEvents: [
    { time: "2025-05-11 09:12", level: "低风险", note: "步态波动，未触发报警" },
    { time: "2025-05-10 17:40", level: "已处理", note: "测试记录" },
  ],
  family: [
    { name: "家属 A", phone: "138****1024", permission: "查看健康数据", status: "已授权" },
    { name: "家属 B", phone: "136****2308", permission: "查看设备状态", status: "待确认" },
  ],
  reports: [
    { id: "R202505", period: "2025年05月", steps: 182640, active: "62小时", status: "已生成" },
    { id: "R202504", period: "2025年04月", steps: 169200, active: "57小时", status: "已归档" },
  ],
};

function currentPage() { return document.body.dataset.page || "dashboard"; }
function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }

function renderLayout() {
  const nav = [["dashboard", "首页看板", "index.html"], ["charts", "健康图表", "health-charts.html"], ["report", "健康报告", "health-report.html"], ["device", "设备管理", "device.html"], ["family", "家属共享", "family-sharing.html"], ["setting", "个人设置", "setting.html"]];
  const active = currentPage();
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) sidebar.innerHTML = nav.map(([key, label, href]) => `<a class="nav-link ${key === active ? "active" : ""}" href="${href}">${label}</a>`).join("");
}

function renderDashboard() {
  setText("stepCount", demo.stats.steps.toLocaleString());
  setText("activeTime", `${demo.stats.activeMinutes} 分钟`);
  setText("fallCount", demo.stats.falls);
  setText("deviceBattery", `${demo.stats.battery}%`);
  setText("deviceMode", demo.stats.mode);
}

function renderDevices() {
  const list = document.getElementById("deviceList");
  if (list) {
    list.innerHTML = demo.devices.map((device, index) => `<button class="list-item ${index === 0 ? "active" : ""}" data-device="${device.id}"><strong>${device.name}</strong><br><span>${device.id} · ${device.status}</span></button>`).join("");
    const first = demo.devices[0];
    setText("detailId", first.id);
    setText("detailBattery", `${first.battery}%`);
    setText("detailUsage", first.usage);
    setText("detailMode", first.mode);
  }
  const events = document.getElementById("fallEvents");
  if (events) events.innerHTML = demo.fallEvents.map(event => `<div class="list-item"><strong>${event.time}</strong><br>${event.level} · ${event.note}</div>`).join("");
}

function renderCharts() {
  const chart = document.getElementById("stepChart");
  if (!chart) return;
  const values = [4200, 5300, 6100, 5840, 7200, 6900, 6840];
  const labels = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const max = Math.max(...values);
  chart.innerHTML = values.map((value, index) => `<div class="bar" style="height:${Math.round((value / max) * 100)}%"><span>${labels[index]}</span></div>`).join("");
}

function renderReports() {
  const table = document.getElementById("reportTable");
  if (table) table.innerHTML = demo.reports.map(report => `<tr><td>${report.id}</td><td>${report.period}</td><td>${report.steps.toLocaleString()}</td><td>${report.active}</td><td><span class="badge green">${report.status}</span></td></tr>`).join("");
}

function renderFamily() {
  const table = document.getElementById("familyTable");
  if (table) table.innerHTML = demo.family.map(item => `<tr><td>${item.name}</td><td>${item.phone}</td><td>${item.permission}</td><td><span class="badge ${item.status === "已授权" ? "green" : "amber"}">${item.status}</span></td></tr>`).join("");
}

function bindActions() {
  document.querySelectorAll("[data-demo-action]").forEach(button => {
    button.addEventListener("click", () => {
      const message = button.dataset.demoAction || "操作已记录";
      window.alert(`${message}。当前为静态演示页面，未连接真实后端。`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLayout();
  renderDashboard();
  renderDevices();
  renderCharts();
  renderReports();
  renderFamily();
  bindActions();
});
