const electron = require('electron')
const {app, BrowserWindow} = electron
let mainWindow
app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width:400, height:500,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('index.html')
})