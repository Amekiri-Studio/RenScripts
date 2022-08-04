// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var fs = require("fs")
const url = window.location.href
if (url.endsWith("index.html")) {
    init()
}
$("#start_button").click(startButtonClick)
$("#load_button").click(loadButtonClick)
$("#setting_button").click(settingButtonClick)
$("#help_button").click(helpButtonClick)
$("#exit_button").click(exitButtonClick)