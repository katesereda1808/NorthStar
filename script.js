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