const imgDisplay = document.getElementById("display")
const imgMain = imgDisplay.getElementsByTagName("img")[0]
const left = document.getElementById("left"), right = document.getElementById("right");

const imgTitle = document.getElementById("imgTitle"), imgDesc = document.getElementById("imgDesc")

let currentImg = 0
let lastImg = images.length - 1

//mostra la prima immagine nel carosello quando carica la pagina
setImg(images[currentImg])

function changeImg() {
    if (this === left) {
       currentImg = (currentImg === 0) ? lastImg : currentImg - 1
    } else if (this === right) {
        currentImg = (currentImg == lastImg) ? 0 : currentImg + 1
    }
    
    let current = images[currentImg]
    setImg(current) 
}

function setImg(current) {
    imgMain.setAttribute("src","./"+current.image)
    imgTitle.innerHTML = current.title
    imgDesc.innerHTML = current.text
}

left.addEventListener("click",changeImg)
right.addEventListener("click",changeImg)



