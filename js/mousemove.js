var card = document.getElementById('card-cont')

document.getElementsByClassName('qr-get')[0].addEventListener("mousemove" , function(e){
    let x = (window.innerHeight/2 - e.pageX)  /20 +10;
    let y = (window.innerWidth/2 - e.pageY)/20;
    console.log(x)
    card.style.transform = `rotateY(${-x}deg) rotateY(${-y}deg)`
    card.style.transition = "none"

})  