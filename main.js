let navElement = document.querySelector('.nav')
let columnCenter = document.querySelector('.column-center')
let leftColumn = document.querySelector('.column-left')
let overLay = document.querySelector('#myOverlay')

navElement.addEventListener("click", function open() {
    columnCenter.classList.remove("column-center")
    columnCenter.classList.add("menu")
    leftColumn.classList.remove("column-left")
    leftColumn.classList.add("menu-left")
    overLay.style.display ="block"
    columnCenter.append(leftColumn) 
})
columnCenter.addEventListener("click", function close() {
    columnCenter.classList.add("column-center")
    columnCenter.classList.remove("menu")
    leftColumn.classList.add("column-left")
    leftColumn.classList.remove("menu-left")
    overLay.style.display ="none"
    
})
window.onclick = function (e) {
    if (e.target == overLay) {
        columnCenter.classList.add("column-center")
        columnCenter.classList.remove("menu")
        leftColumn.classList.add("column-left")
        leftColumn.classList.remove("menu-left")
        overLay.style.display ="none"
    }
}