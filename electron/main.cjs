// electron/main.cjs
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('node:path')

if (require('electron-squirrel-startup')) {
  process.exit(0);
}


const isDev = !app.isPackaged

let win;

function createWindow() {
  win = new BrowserWindow({
    // Initial size
    width: 390,
    height: 550,
    // Size limits
    minWidth: 390,
    minHeight: 550,
    maxWidth: 850,
    maxHeight: 550,

    title: "To-Do List",
    icon: path.join(__dirname, "../src/assets/logo.ico"),
    resizable: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  })

  if (isDev) {
    win.loadURL('http://localhost:5173')
  } else {
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('window:minimize', () => {
  if (win) win.minimize();
});

ipcMain.handle('window:close', () => {
  if (win) win.close();
});
