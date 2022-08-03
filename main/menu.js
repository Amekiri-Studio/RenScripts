const {Menu,BrowserWindow} = require('electron')
const {menu_about,menu_aboutRenScripts} = require("./menu/event")
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
                label: "Configurate...",
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
                accelerator: "shift+a",
                click:menu_about
            },
            {
                type: "separator"
            },
            {
                label: "About RenScripts",
                click:menu_aboutRenScripts
            },
            {
                label: "About Electron"
            }
        ]
    }
]

var m = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(m)