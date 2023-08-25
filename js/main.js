const imgDisplay = document.getElementById("display")
const imgMain = imgDisplay.firstElementChild
const left = document.getElementById("left"), right = document.getElementById("right")

let currentImg = 0
let lastImg = images.length - 1
console.log(lastImg)

function changeImg() {
    if (this === left) {

       currentImg = (currentImg === 0) ? lastImg : currentImg - 1
       imgMain.setAttribute("src","./"+images[currentImg].image)
        
    } else if (this === right) {
        currentImg = (currentImg == lastImg) ? 0 : currentImg + 1
        imgMain.setAttribute("src","./"+images[currentImg].image)
    }
    
}

left.addEventListener("click",changeImg)
right.addEventListener("click",changeImg)



