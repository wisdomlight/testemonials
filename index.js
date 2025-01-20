import { images } from './data.js'
const nextBtn = document.getElementById('next-btn')
const image = document.getElementById('image')
const paragraph = document.getElementById('paragraph')


let currentIndex = 0

function updateConent(){
    setInterval(() => {
        paragraph.textContent = images[currentIndex].comment
        image.src = images[currentIndex].path 
        image.alt = images[currentIndex].alt 
        currentIndex = (currentIndex + 1 ) % images.length
    }, 3000)
}
updateConent()

// function injectComment(){
//     const paragraph = document.querySelector('.paragraph')
//     const image = document.querySelector('.image')

//     image.src = images[currentIndex].path
//     image.alt = images[currentIndex].alt
//     paragraph.textContent = images[currentIndex].comment
//     currentIndex = (currentIndex + 1) % images.length
//     }


// nextBtn.addEventListener('click', injectComment)