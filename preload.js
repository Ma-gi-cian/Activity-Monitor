const { contextBridge } = require('electron/renderer')

/**
 * Electron Main process cannot access the DOM and the Renderer process
 * cannot access the Node.js APIs. To solve this we use ipcMain and ipcRenderer
 * 
 * + Sending message from web page to the main process
 * -> we need to set up a main process handler with ``ipcMain.handle``
 * 
 */


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping')
})

contextBridge.exposeInMainWorld('messages', {
  hello: () => "world"
})
