// import './cdn.jsdelivr.net_npm_swiper@10.0.4_swiper-bundle.min.js'
// console.log('text')
// const options = {
//   speed: 1000,
//   loop: true,
//   updateOnWindowResize: true,

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//       enabled: true
//     },
//     320: {
//       slidesPerView: 1.3,
//       enabled: true
//     },
//     360: {
//       slidesPerView: 1.47,
//       enabled: true
//     },
//     390: {
//       slidesPerView: 1.6,
//       enabled: true
//     },
//     420: {
//       slidesPerView: 2,
//       enabled: true
//     },
//     768: {
//       enabled: false
//     }
//   },

//   pagination: {
//     el: '.swiper-pagination'
//   }
// }

// let swiper = new Swiper('.swiper', options)

let buttonMore = document.querySelector('.button-read-more--brends')

function handleButtonClick() {
  let buttonMoreIcon = buttonMore.querySelector(
    '.button-read-more__icon--brends'
  )
  let buttonMoreText = buttonMore.querySelector(
    '.button-read-more__text--brends'
  )
  let buttonsMenuTablet = document.querySelectorAll('[data-hidden="tablet"]')
  let buttonsMenuDesktop = document.querySelectorAll('[data-hidden="desktop"]')

  buttonsMenuTablet.forEach((element) => {
    element.classList.toggle('a-menu-brands--hidden')
  })

  buttonsMenuDesktop.forEach((element) => {
    element.classList.toggle('a-menu-brands--hiddenDesktop')
  })

  if (buttonMoreIcon.classList.contains('button-read-more__icon--hidden')) {
    buttonMoreText.textContent = 'Показать все'
    buttonMoreIcon.classList.remove('button-read-more__icon--hidden')
  } else {
    buttonMoreText.textContent = 'Скрыть'
    buttonMoreIcon.classList.add('button-read-more__icon--hidden')
  }
}

buttonMore.addEventListener('click', handleButtonClick)

// window.addEventListener('orientationchange', () => {
//   swiper.destroy()
//   swiper = new Swiper('.swiper', options)
// })
