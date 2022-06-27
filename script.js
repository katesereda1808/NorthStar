let mobile_menu = document.querySelector('.header_navbar_mobile');
let close_menu = document.querySelector('.burger_close');
let burger=document.querySelector('.menu_btn_mobile');
console.log(burger)
burger.addEventListener('click', function(){
  mobile_menu.classList.remove('hidden');
});
close_menu.addEventListener('click', function(){
  mobile_menu.classList.add('hidden');
});

let slides = document.querySelectorAll('.slide');
function hideSlides(){
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('shown')
    slides[i].classList.add('hidden')
  };
}
function showSlide(i){
    // slides[i].classList.remove('hidden');
    slides[i].classList.replace('hidden', 'shown')
}

function getWidth(){
  let width = document.documentElement.clientWidth;
  if(width<=900){
    hideSlides();
    showSlide(0);
    // return 'mobile';
  } else {
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('hidden');
      slides[i].classList.remove('shown');
    }
    // return 'desktop';
  }
};
getWidth();
window.addEventListener('resize', getWidth);