const { contextBridge: bridge, ipcRenderer } = require('electron');
const fs = require('fs');

// 渲染进程可使用window.ipcRenderer.send向主进程发送消息
bridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, fun) => ipcRenderer.on(channel, fun),
});

// node相关的模块
bridge.exposeInMainWorld('node', {
  fs,
});
