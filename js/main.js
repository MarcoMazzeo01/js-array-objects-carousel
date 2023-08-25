const imgDisplay = document.getElementById("display")
const imgMain = imgDisplay.getElementsByTagName("img")[0]
const left = document.getElementById("left"), right = document.getElementById("right");

const imgTitle = document.getElementById("imgTitle"), imgDesc = document.getElementById("imgDesc")

let currentImg = 0
let lastImg = images.length - 1

function changeImg() {
    let current

    if (this === left) {
       currentImg = (currentImg === 0) ? lastImg : currentImg - 1
       current = images[currentImg]
        
    } else if (this === right) {
        currentImg = (currentImg == lastImg) ? 0 : currentImg + 1
        current = images[currentImg]
    }
    
    imgMain.setAttribute("src","./"+current.image)
    imgTitle.innerHTML = current.title
    imgDesc.innerHTML = current.text
}

left.addEventListener("click",changeImg)
right.addEventListener("click",changeImg)



