const myLink = document.querySelectorAll(".head_links li a");
const lastLink = document.querySelector(".head_links li .other");
const lastDiv = document.querySelector(".other_links");
const myBar = document.querySelector(".div_menu");
const myHeadLinks = document.querySelector(".head_links");
myLink.forEach(function(actives) {
actives.addEventListener("click",function(){
    removeActive()
    actives.classList.add("active") 
    if (lastLink.classList.contains("active")){
        changeStyle()
    }else{
        lastDiv.classList.remove("active")
    }
});
})
function removeActive(){
    myLink.forEach(function(active){
        active.classList.remove("active")
    })
}
function changeStyle(){
    lastDiv.classList.add("active"),1000
} 
myBar.addEventListener("click",function(){
myHeadLinks.classList.toggle("active")
})

/* progress bar*/
const skills = document.querySelector(".our_skills");
const progrss = document.querySelectorAll(".progress_bar span");
window.onscroll = function(){
    if(window.scrollY >= skills.offsetTop){
        progrss.forEach(function(spans){
            spans.style.width = spans.dataset.width
        })
    }
}

/* events*/
let countDate = new Date("April 8,2022 23:59:59").getTime();
let count = setInterval(function(){
let dateNow = new Date().getTime();
let diff = countDate - dateNow;
let days = Math.floor(diff /(1000 * 60 * 60 * 24));
let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60 )
let minuts = Math.floor((diff % (1000 * 60 * 60)) / 1000 / 60)
let seconds = Math.floor(diff % (1000 * 60) / 1000)
document.querySelector(".days").innerHTML = days
document.querySelector(".hours").innerHTML = hours
document.querySelector(".minuts").innerHTML = minuts
document.querySelector(".seconds").innerHTML = seconds
if(diff < 0 ){
    clearInterval(count)
}
},1000)
// videos
const videoName = document.querySelectorAll(".video_title li");
const videoPlayer = document.querySelectorAll(".video_player .v-play")
videoName.forEach(function(myVideo){
myVideo.addEventListener("click",function(){
    removeVideo();
    myVideo.classList.add("active")
    removePlayer();
    document.querySelectorAll(this.dataset.video).forEach((el) =>{
        el.classList.add("active");
    })

// hide the overlay, or show it if it's already hidden



})

})
function removeVideo(){
    videoName.forEach(function(videoName){
        videoName.classList.remove("active")
    })
}
function removePlayer(){
    videoPlayer.forEach(function(v){
        v.classList.remove("active")
        var srcUrl = v.getAttribute('src');    
        v.setAttribute('src', srcUrl);
    })
}

// videos// 
// Our Awesome Stats//
const state = document.querySelector(".stats");
const number = document.querySelectorAll(".stats .box .number")
started = false
window.onscroll = function(){
    if(window.scrollY >= state.offsetTop){
        if(!started){
            number.forEach((num) => start(num));
        }started = true
    }
}
function start(el){
    let goal = el.dataset.num;
    let count = setInterval(()=>{
     el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },2000 / goal)
    }
