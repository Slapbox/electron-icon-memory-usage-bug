// Modules to control application life and create native browser window
const {app, BrowserWindow, nativeImage, Tray} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  const iconPath = path.resolve('build/icons/icon-1024x1024.png');

   global.appIcon = nativeImage.createFromPath(iconPath); // Main process memory usage on Windows: 312mb
  // const appIcon = nativeImage.createFromPath(iconPath); // Main process memory usage on Windows: 18mb

  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})