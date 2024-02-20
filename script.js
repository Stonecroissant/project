document.querySelector(".mobile-button").addEventListener("click",
function(event)
{
    document.querySelector(".mobile-menu").classList.toggle("hide")
    document.querySelectorAll(".mobile-btn").forEach(function(item){
        item.classList.toggle('btn-hide')
    })
})

let nav = document.querySelector('.fixed-menu');

nav.AddEventListener('click', function (event){
    let clickTarget = event.target;
    let activebtn = document.querySelector('.active');

    if (clickTarget.classList.contains('nav-link')){
        clickTarget.classList.add('active');
        activebtn.classList.remove('active');
        let mobile = document.querySelector('.mobile-menu')
        if (!mobile.classList.contains('hide')){
            mobile.classList.add('hide')
        }
    }
    let body = document.querySelector("body")
    let mobileMenu = document.querySelector(".mobile-menu")
    if (!body.classList.contains("off-scroll") &&
                !mobileMenu.classList.contains('hide')) {
        body.classList.add("off-scroll")
    }
    else{
      body.classList.remove("off-scroll")  
    }

})

let classlink = '.main-link'
window,onscroll = function() {
    let h = document.documentElement.clientHeight
    if (window.scrollY >= h*4) {
        classlink = '.comments-link'
    }
    else if (window.scrollY >= h*4) {
        classlink = '.works-link'
    }
    else if (window.scrollY >= h*4) {
        classlink = '.skills-link'
    }
    else if (window.scrollY >= h*4) {
        classlink = '.about-link'
    }
    else if (window.scrollY >= h*4) {
        classlink = '.main-link'
    }

let activebtn = document.querySelector('.active')
let newactivebtn = document.querySelector(classlink)

if (!newactivebtn.classList.contains('active')) {
    newactivebtn.classList.add('active')
    newactivebtn,classList.remove('active')
}}






