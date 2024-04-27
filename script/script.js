// task 4 ---------------------------------------------------
const fourTask = document.querySelector("#fourTask")
const fourBtn = document.querySelector("#fourBtn")
const fourBtnImg = document.querySelector("#fourBtnImg")
const mainSection = document.querySelector("#mainSection")
var fourObj = {
    0: "./assets/menu.svg",
    1: "./assets/menu_open.svg"
}
// open/close menu functions-------------------
const OpenBurger = () => {
    fourTask.classList.remove("close")
    fourTask.classList.add("open")
    fourBtnImg.src=fourObj[1]
    mainSection.style.filter="blur(10px)"
}
const CloseBurger = () => {
    fourTask.classList.remove("open")
    fourTask.classList.add("close")
    fourBtnImg.src=fourObj[0]
    mainSection.style.filter="none"
}
// open/close menu with button-------------------
fourBtn.addEventListener("click",function () {
    if (fourTask.classList.contains("close")) {
        OpenBurger()
    } else {
        CloseBurger()
    }
})
// close menu with section----------------------
mainSection.addEventListener("click", () => {
    CloseBurger()
})
