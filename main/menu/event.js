const {dialog,shell} = require("electron")

function menu_about() {
    dialog.showMessageBox(null,{
        type:'info',
        title:'[Program Name]',
        message: '[Program Name] is developed by [Developer Name]\nCopyright©2022 [Developer Name]',
        buttons: ['Official Website','Close']
    }).then(r => {
        if (r.response === 0) {
            // Your official url
            shell.openExternal("https://amekiri.com")
        }
    })
}
function menu_aboutRenScripts() {
    dialog.showMessageBox(null,{
        type:'info',
        title:'About RenScripts',
        message: 'Program is built with RenScripts 1.0.0\nBased on MIT License',
        buttons: ['Official Website','GitHub','Close']
    }).then(r => {
        if (r.response === 0) {
            shell.openExternal("https://amekiri.com")
        }
        else if (r.response === 1) {
            shell.openExternal("https://github.com/Amekiri-Studio/RenScripts")
        }
    })
}

module.exports = {menu_about,menu_aboutRenScripts}