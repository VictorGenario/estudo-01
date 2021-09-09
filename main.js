/*------ menu icon ------------ */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/*------  scroll page -------------- */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //quando o scroll for maior que a altura do header
    header.classList.add('scroll')
  } else {
    //quando a altura do header for menor que a do scroll
    header.classList.remove('scroll')
  }
})

/*-------   Swiper --------------------*/

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true,
  loop: true,
  speed: 1000
})

/*--------   ScrollReveal --------------*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #servicies header, #servicies .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
`,
  { interval: 100 }
)
