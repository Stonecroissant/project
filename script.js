let nav = document.querySelector('.fixed-menu');

nav.AddEventListener('click', function event(){
    let clickTarget = event.target;
    let activebtn = document.querySelector('.active');

    if (clickTarget.ClassList.contains('nav-link')){
        clickTarget.ClassList,add('active');
        activebtn.classList.remove('active');
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
}
let activebtn = document.querySelector('.active')
let newactivebtn = document.querySelector(classlink)

if (!newactivebtn.classList.contains('active')) {
    newactivebtn.classList.add('active')
    newactivebtn,classList.remove('active')
}
