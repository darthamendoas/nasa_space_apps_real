const s1=document.getElementById("s1").value
const s2=document.getElementById("s2").value
const s3=document.getElementById("s3").value
const s4=document.getElementById("s4").value
const s5=document.getElementById("s5").value
const launch=document.getElementById("submit")
let money=100000000
let fuel=0
maxp=0
minp=50
let point=0
let crewyes=0

launch.addEventListener("click",function(){
    function s1(){
        if (s1===1){
            money-=10000000
            fuel+=500
        }
        else if (s2===2){
            money-=5000000
            fuel+=300
        }
        else if (s3===3){  
            money-=20000000
            fuel+=700
        }
    };

    function s2(){
        if (s2===1){
            money-=20000000
            maxp+=100
        }
        else if (s2===2){
            money-=50000000
            maxp+=200
        }
    };

    function s3(){
        if (s3===1){
            money-=10000000
            fuel+=200
        }
        else if (s3===2){
            money-=10000000
            minp+=50
        }
    };

    function s4(){
        if (s4===1){
            money-=10000000
            fuel+=200
        }
        else if (s4===2){
            money-=10000000
            minp+=50
        }
    };


    function s5(){
        if (s5===1){
            money-=10000000
            minp+=50
        }
        else if (s5===2){
            money-=10000000
            maxp+=50
        }
        else if (s5===3){
            money-=50000000
            minp+=50
            maxp+=50
        }
    };

    function points(){
        point=(fuel/5+getRandomInt)/100
    };

    s1()
    s2()
    s3()
    s4()
    s5()
    points()


    const getRandomInt = (minp, maxp) => Math.floor(Math.random() * (maxp - minp + 1)) + minp;
    
})


const mercury = document.querySelector("#mercury");
const venus = document.querySelector("#venus");
const earth = document.querySelector("#earth");
const mars = document.querySelector("#mars");
const jupiter = document.querySelector("#jupiter");
const saturn = document.querySelector("#saturn");
const uranus = document.querySelector("#uranus");
const neptune = document.querySelector("#neptune");

mercury.addEventListener("click", function() {points+=50;document.getElementById("pointer").textContent=points});
venus.addEventListener("click", function() {points+=20;document.getElementById("pointer").textContent=points});
earth.addEventListener("click", function() {points+=100;document.getElementById("pointer").textContent=points});
mars.addEventListener("click", function() {points+=75;document.getElementById("pointer").textContent=points});
jupiter.addEventListener("click", function() {points+=10;document.getElementById("pointer").textContent=points});
saturn.addEventListener("click", function() {points-=10;document.getElementById("pointer").textContent=points});
uranus.addEventListener("click", function() {points-=20;document.getElementById("pointer").textContent=points});
neptune.addEventListener("click", function() {points-=50;document.getElementById("pointer").textContent=points});

document.getElementById("pointer").textContent=points