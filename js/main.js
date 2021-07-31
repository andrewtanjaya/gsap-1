const html = document.documentElement
const canvas = document.querySelector('.canvas-scrolling')
const context = canvas.getContext('2d')

const currentFrame = index => (
    `https://d25gvo126vpks5.cloudfront.net/pop-seq/pop.${index.toString().padStart(3,'0')}.jpg`
)

let canvasCont = document.getElementById('canvas-cont')
let progress = document.getElementById('progress')
let progressCont = document.getElementById('progress-cont')
let progressCount = document.getElementById('progress-count')
var queue = new createjs.LoadQueue(false)
queue.on("progress" , event => {
    let progress = Math.floor(event.progress * 100)
    this.progress.style.backgroundColor = "white"
    this.progress.style.width = progress + '%'
    progressCount.innerHTML= progress + '%'
    if(progress == 100){
        console.log('all done')
    }
})
queue.on("complete" , event => {
    canvasCont.classList.add('fadeIn')
    setTimeout(() => {
        progressCont.classList.add('fadeOut')
        setTimeout(() => {
            for(let j = 0 ;j<50 ; j++){
                dosettimeout(j)
            }
            window.addEventListener('scroll', () =>{
                const scrollTop = html.scrollTop
                const maxScrollTop = html.scrollHeight - window.innerHeight
                const scrollFraction =  scrollTop/maxScrollTop
                const frameIndex = Math.min(frameCount - 1 , Math.floor(scrollFraction * frameCount))
            
                requestAnimationFrame(() => updateImage(frameIndex+1+50))
            })
        }, 500);
    }, 500);
    
})

function dosettimeout(i){
    setTimeout(() => {
        console.log(i)
        updateImage(i)
    }, 50 * i);
}

const frameCount = 216

canvas.height = 132 * window.innerHeight / 100
canvas.width = canvas.height * (16/9)
const img = new Image()
img.src = currentFrame(1);
img.style.objectFit = "cover"
img.onload = function(){
    context.drawImage(img, 0, 0, img.width , img.height);
}

const preloadImages = () =>{
    for(let i = 1 ; i < frameCount;i ++){
        const img = new Image()
        img.style.objectFit = "cover"
        queue.loadFile(currentFrame(i))
        img.src = currentFrame(i)
    }
}

preloadImages()

const updateImage = index =>{
    img.src = currentFrame(index)
    img.style.objectFit = "cover"
    context.drawImage(img, 0, 0, img.width , img.height);

}
