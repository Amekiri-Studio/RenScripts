// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// var fs = require("fs")
const boxContent = '<div class="notice_box">' +
    '      <h1>' +
    '        Exit game?' +
    '      </h1>' +
    '      <button class="button1" id="button_exit_yes">Yes</button>' +
    '      <button class="button1" id="button_exit_no">No</button>' +
    '    </div>'

$().ready(() => {
    init()
})

// window.onbeforeunload = (e) => {
//     loadExitNoticeBox()
//     e.returnValue = false
//     $("#button_exit_yes").click(() => e.returnValue = true)
// }

// window.addEventListener("close",e => {
//     e.preventDefault()
//     loadExitNoticeBox()
// })

$("#start_button").click(startButtonClick)
$("#load_button").click(loadButtonClick)
$("#setting_button").click(settingButtonClick)
$("#help_button").click(helpButtonClick)
$("#exit_button").click(exitButtonClick)

function loadExitNoticeBox() {
    $(".background").prepend(boxContent)
    setExitBoxButtonEvent()
}

function setExitBoxButtonEvent() {
    $("#button_exit_yes").click(exitButtonYes)
    $("#button_exit_no").click(exitButtonNo)
}

function exitButtonYes() {
    $(".notice_box").remove()
    $(".background").animate({opacity: '0'},1000)
    setTimeout(() => {
        window.close()
    },1000)
}

function exitButtonNo() {
    $(".notice_box").remove()
}