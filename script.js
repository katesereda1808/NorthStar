let mobile_menu = document.querySelector('.header_navbar_mobile');
let close_menu = document.querySelector('.burger_close');
let burger=document.querySelector('.menu_btn_mobile');
let header_chevron_left = document.querySelector('.arrow_left');
let header_chevron_right = document.querySelector('.arrow_right');
let header_brands = document.querySelector('.header_brands');
function scroll(direction) {
  switch (direction) {
    case "right":
      header_brands.scrollLeft += 100;
      break;
    case "left":
      header_brands.scrollLeft -= 100;
      break;
    default:
      break;
  }
}
header_chevron_left.addEventListener('click', ()=>scroll('left'));
header_chevron_right.addEventListener('click', ()=>scroll('right'));
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
    slides[i].classList.replace('hidden', 'shown')
}

if(document.querySelector('.slider_content')){
  console.log('blabla')
  getWidth();
  window.addEventListener('resize', getWidth);
}
function getWidth(){
  let width = document.documentElement.clientWidth;
  if(width<=900){
    hideSlides();
    showSlide(0);
  } else {
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('hidden');
      slides[i].classList.remove('shown');
    }
  }
};