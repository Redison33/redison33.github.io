let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})


let search = document.querySelector('.header__search');
let searchBlock = document.querySelector('.header__search-block');
let closeS = document.querySelector('.header__search-icon-close')

search.addEventListener('click',
function() {

  searchBlock.classList.toggle('header__search-block--active');

})


closeS.addEventListener('click',
function() {

  searchBlock.classList.remove('header__search-block--active');

})


let tabsBtn = document.querySelectorAll('.step');
let tabsItem = document.querySelectorAll('.wokrs-bottom');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('step--active')});
    e.currentTarget.classList.add('step--active');

    tabsItem.forEach(function(element){ element.classList.remove('wokrs-bottom--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('wokrs-bottom--active');

  });
});

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});


const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
  loop: true,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});

