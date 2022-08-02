const {Menu,BrowserWindow} = require('electron')

var menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Save",
                accelerator:'ctrl+s'
            },
            {
                label: "Load",
                accelerator:'ctrl+l'
            },
            {
                type: "separator"
            },
            {
                label: "Quick Save",
                accelerator:'f2'
            },
            {
                label: "Quick Load",
                accelerator:'f3'
            }
        ]
    }
]

var m = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(m)