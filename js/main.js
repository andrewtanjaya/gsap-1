const html = document.documentElement
const canvas = document.querySelector('.canvas-scrolling')
const context = canvas.getContext('2d')

const currentFrame = index => (
    `https://d25gvo126vpks5.cloudfront.net/pop-seq/pop.${index.toString().padStart(3,'0')}.jpg`
)

let progress = document.getElementById('progress')
var queue = new createjs.LoadQueue(false)
queue.on("fileload" , handleFileComplete);
queue.on("progress" , event => {
    console.log(event)
})

function handleFileComplete(event){

}


const frameCount = 218

canvas.height = 1080
canvas.width = 1920
const img = new Image()
img.src = currentFrame(1);
img.onload = function(){
    context.drawImage(img, 0,0)
}

const preloadImages = () =>{
    for(let i = 1 ; i < frameCount;i ++){
        const img = new Image()
        queue.loadFile(currentFrame(i))
        img.src = currentFrame(i)
    }
}

preloadImages()

const updateImage = index =>{
    img.src = currentFrame(index)
    context.drawImage(img, 0,0)
}

window.addEventListener('scroll', () =>{
    const scrollTop = html.scrollTop
    const maxScrollTop = html.scrollHeight - window.innerHeight
    const scrollFraction =  scrollTop/maxScrollTop
    const frameIndex = Math.min(frameCount - 1 , Math.floor(scrollFraction * frameCount))

    requestAnimationFrame(() => updateImage(frameIndex+1))
})
