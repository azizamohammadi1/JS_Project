
// Functionality of first page

function btn_hover(){
    document.getElementById('btn_arrow').innerHTML="Learn More &#129125"
}


function btn_unhover(){
    document.getElementById('btn_arrow').innerHTML="Learn More &#8594"
}




// Functionality of second page

let Swiper1 = document.getElementById("swiper1")
let Swiper2 = document.getElementById("swiper2")

Swiper1.addEventListener("click", function(){
    document.getElementById("p1").innerHTML="<img src='apple.png'>"
    document.getElementById("p2").innerHTML="<img src='logo.png'>"
    document.getElementById("p3").innerHTML="<img src='6.png'>"
    document.getElementById("p4").innerHTML="<img src='5.png'>"
    document.getElementById("p5").innerHTML="<img src='4.png'>"
    document.getElementById("p6").innerHTML="<img src='3.png'>"
    document.getElementById("p7").innerHTML="<img src='2.png'>"
    document.getElementById("p8").innerHTML="<img src='1.png'>"
    document.getElementById("swiper1").style.backgroundColor='#024430'
    document.getElementById("swiper1").style.width='15px'
    document.getElementById("swiper2").style.width='10px'
    document.getElementById("swiper2").style.backgroundColor='#FFFFFF'
})

Swiper2.addEventListener("click", function(){
    document.getElementById("p1").innerHTML="<img src='1.png'>"
    document.getElementById("p2").innerHTML="<img src='2.png'>"
    document.getElementById("p3").innerHTML="<img src='3.png'>"
    document.getElementById("p4").innerHTML="<img src='4.png'>"
    document.getElementById("p5").innerHTML="<img src='5.png'>"
    document.getElementById("p6").innerHTML="<img src='6.png'>"
    document.getElementById("p7").innerHTML="<img src='logo.png'>"
    document.getElementById("p8").innerHTML="<img src='apple.png'>"
    document.getElementById("swiper2").style.backgroundColor='#024430'
    document.getElementById("swiper2").style.width='15px'
    document.getElementById("swiper1").style.backgroundColor='#FFFFFF'
    document.getElementById("swiper1").style.width='10px'
})





// Funtionality of third page

function btn_hover1(){
    document.getElementById('details1').innerHTML="View Details &#129125"
}


function btn_unhover1(){
    document.getElementById('details1').innerHTML="View Details &#8594"
}


function btn_hover2(){
    document.getElementById('details2').innerHTML="View Details &#129125"
}


function btn_unhover2(){
    document.getElementById('details2').innerHTML="View Details &#8594"
}

function btn_hover3(){
    document.getElementById('details3').innerHTML="View Details &#129125"
}


function btn_unhover3(){
    document.getElementById('details3').innerHTML="View Details &#8594"
}


function btn_hover4(){
    document.getElementById('details4').innerHTML="View Details &#129125"
}


function btn_unhover4(){
    document.getElementById('details4').innerHTML="View Details &#8594"
}


function btn_hover5(){
    document.getElementById('details5').innerHTML="View Details &#129125"
}


function btn_unhover5(){
    document.getElementById('details5').innerHTML="View Details &#8594"
}

function btn_hover6(){
    document.getElementById('details6').innerHTML="View Details &#129125"
}


function btn_unhover6(){
    document.getElementById('details6').innerHTML="View Details &#8594"
}

