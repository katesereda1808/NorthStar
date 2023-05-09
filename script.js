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

///////
if(document.querySelector('.slider_content')){
  getWidth();
  window.addEventListener('resize', getWidth);

}
if (document.querySelector(".slider__content")) {
  let slider_content = document.querySelector(".slider__content");
  let dot_container = document.querySelector(".dots");
  let dots = document.getElementsByClassName("dot");
  let indicator = document.querySelector(".indicator");
  console.log(indicator.classList);

  function addDots() {
    dot_container.innerHTML = "";
    for (let i = 0; i < slider_content.children.length; i++) {
      let div = document.createElement("div");
      div.className = "dot";
      dot_container.appendChild(div);
    }
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => showSlides(i));
    }
  }

  addDots(slider_content.children, showSlides);
  let slides = document.getElementsByClassName("slide");

  function showSlides(n) {
    if (n > slides.length - 1) {
      n = 0;
    }
    if (n < 0) {
      n = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove("shown");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("dot_active");
    }
    slides[n].style.display = "block";
    slides[n].classList.add("shown");
    dots[n].classList.add("dot_active");
  }

  let chevron_left = document.querySelector(".direction_left");
  let chevron_right = document.querySelector(".direction_right");

  function getWidth() {
    let width = document.documentElement.clientWidth;
    if (width <= 400) {
      showSlides(0);
      indicator.classList.remove("hide");
      return "mobile";
    } else {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "block";
      };
      indicator.classList.add("hide");
      return "desktop";
    }
  }
  getWidth();
  window.addEventListener("resize", getWidth);

  function scrollSlides(n) {
    n > 0
      ? (slider_content.scrollLeft += 300)
      : (slider_content.scrollLeft -= 300);
  }

  chevron_right.addEventListener("click", (e) => {
    e.preventDefault();
    scrollSlides(1);
  });
  chevron_left.addEventListener("click", (e) => {
    e.preventDefault();
    scrollSlides(-1);
  });
  /// ёто уже для стрелок на моб версии
  // function findSlide() {
  //   let shown = slider_content.querySelector(".shown");
  //   let slidesArr = Array.from(slides);
  //   return slidesArr.indexOf(shown);
  // }
  // chevron_left.addEventListener("click", () => showSlides(findSlide() - 1));
  // chevron_right.addEventListener("click", () => showSlides(findSlide() + 1));
}


////////

