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
                accelerator:'ctrl+o'
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
    },
    {
        label: "Operate",
        submenu: [
            {
                label: "Back",
                accelerator: "ctrl+b"
            },
            {
                label: "Log",
                accelerator: "ctrl+l"
            },
            {
                type: 'separator'
            },
            {
                label: 'Skip',
                type: 'checkbox',
            },
            {
                label: 'Auto',
                type: 'checkbox',
            }
        ]
    },
    {
        label: "System",
        submenu: [
            {
                label: "Setting"
            }
        ]
    },
    {
        label: "Help",
        submenu: [
            {
                label: "Help",
                accelerator: "shift+h"
            },
            {
                label: "About",
                accelerator: "shift+a"
            },
            {
                type: "separator"
            },
            {
                label: "About RenScripts"
            },
            {
                label: "About Electron"
            }
        ]
    }
]

var m = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(m)