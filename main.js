window.onscroll = function() {navSticky()};

var nav = document.getElementById('navbar');
var sticky = nav.offsetTop;

var menu = document.getElementById('menu');

menu.addEventListener('click', function(){
    
    console.log('menu button clicked');
    nav.classList.toggle('menuClicked');
});



function navSticky() {
    if(window.pageYOffset >= sticky){
        nav.classList.add('sticky');
    } else {
         nav.classList.remove('sticky');
    }

}
