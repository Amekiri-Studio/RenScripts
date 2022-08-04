const {setBackgroundImage} = require("./util/ui.js")
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
    $(".background").animate({opacity: '0'},1000)
    setTimeout(() => {
        window.close()
    },1000)
}