let nav = document.querySelector('.fixed-menu');

nav.AddEventListener('click', function event(){
    let clickTarget = event.target;
    let activebtn = document.querySelector('.active');

    if (clickTarget.ClassList.contains('nav-link')){
        clickTarget.ClassList,add('active');
        activebtn.classList.remove('active');
    }

})

