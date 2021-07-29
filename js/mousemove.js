var card = document.getElementById('card-cont')

// document.addEventListener('mousemove', function(e){
//   var x = e.pageX / window.innerHeight;
//       x = x * -60;
//       card.style.webkitTransform = 'translateX(' + x + '%)';
//       card.style.transform = 'translateX(' + x + '%)';
// })

// window.addEventListener("mousemove",function(e) {

//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     var clientHeight = document.body.clientHeight;
//     var skew = {}
//     skew.y = (20 * ((e.x / width) - 0.5)) 
//     skew.x = -(20 * ((e.y / height) - 0.5));
  
//     card.style = "perspective("+clientHeight+"px) rotateX("+skew.x+"deg) rotateY("+skew.y+"deg)"
//   })

document.getElementsByClassName('qr-get')[0].addEventListener("mousemove" , function(e){
    let x = (window.innerHeight/2 - e.pageX)  /20 +10;
    let y = (window.innerWidth/2 - e.pageY)/20;
    console.log(x)
    card.style.transform = `rotateY(${-x}deg) rotateY(${-y}deg)`
    // card.style.transformOrigin= 'y'
    card.style.transition = "none"

})  