const {setBackgroundImage} = require("./util/ui.js")
// import {setBackgroundImage} from '../util/ui.js';
function init() {
    // It can set your background
    setBackgroundImage("./images/index_bg")
}

function startButtonClick(e) {
    $(".background").animate({opacity: '0'},1000)
    setTimeout(() => {
        window.location.href = "./game.html"
    },1000)
}
function loadButtonClick(e) {

}
function settingButtonClick(e) {

}
function helpButtonClick(e) {

}
function exitButtonClick(e) {
    // window.electronAPI.messageDialog({
    //     type: 'info',
    //     title: 'Notice',
    //     message: 'Are you really exit?',
    //     buttons: ['yes','no']
    // },r => {
    //
    // })
    $(".background").animate({opacity: '0'},1000)
    setTimeout(() => {
        window.close()
    },1000)
}