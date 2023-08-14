if (window.innerWidth < 767) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: `auto`,
    spaceBetween: 16,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        enabled: true
      },
      320: {
        slidesPerView: 1.3,
        enabled: true
      },
      360: {
        slidesPerView: 1.47,
        enabled: true
      },
      390: {
        slidesPerView: 1.6,
        enabled: true
      },
      420: {
        slidesPerView: 2,
        enabled: true
      },
      768: {
        enabled: false
      }
    },

    pagination: {
      el: '.swiper-pagination'
    }
  })
}

if (window.innerWidth > 767) {
  let swiperWrapperDelete = document.querySelector('.table-prices')
  swiperWrapperDelete.classList.remove('swiper-wrapper')
}

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

// window.addEventListener('orientationchange', () => {
//   swiper.destroy()
//   swiper = new Swiper('.swiper', options)
// })

//button More Brends
let buttonMoreBrends = document.querySelector('.button-read-more--brends')

function handleButtonClickBrends() {
  let buttonMoreIcon = buttonMoreBrends.querySelector(
    '.button-read-more__icon--brends'
  )
  let buttonMoreText = buttonMoreBrends.querySelector(
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

buttonMoreBrends.addEventListener('click', handleButtonClickBrends)

//button More Technique

let buttonMoreTechnique = document.querySelector('.button-read-more--technique')

function handleButtonClickTechnique() {
  let buttonMoreIconTechnique = buttonMoreTechnique.querySelector(
    '.button-read-more__icon--technique'
  )
  let buttonMoreTextTechnique = buttonMoreTechnique.querySelector(
    '.button-read-more__text--technique'
  )

  let techniqueHidden = document.querySelectorAll('[data-hidden="hidden"]')

  techniqueHidden.forEach((element) => {
    element.classList.toggle('a__block--technique--hidden')
  })

  if (
    buttonMoreIconTechnique.classList.contains(
      'button-read-more__icon--hidden-technique'
    )
  ) {
    buttonMoreTextTechnique.textContent = 'Показать все'
    buttonMoreIconTechnique.classList.remove(
      'button-read-more__icon--hidden-technique'
    )
  } else {
    buttonMoreTextTechnique.textContent = 'Скрыть'
    buttonMoreIconTechnique.classList.add(
      'button-read-more__icon--hidden-technique'
    )
  }
}

buttonMoreTechnique.addEventListener('click', handleButtonClickTechnique)

//menu
let bodySidebarClose = document.querySelector('.body__sidebar--close')
let sidebarBurger = document.querySelector('.button-item-sidebar--burger-close')
if (window.innerWidth < 1365) {
  let menuBurger = document.querySelector('.button-menu__burger')

  menuBurger.addEventListener('click', function () {
    bodySidebarClose.classList.remove('body__sidebar--close')
  })
  sidebarBurger.addEventListener('click', function () {
    bodySidebarClose.classList.add('body__sidebar--close')
  })
}

//модалка заказать звонок

let menuCall = document.querySelectorAll('.button-menu__call')
let requestCall = document.querySelector('.request-call')
let feedback = document.querySelector('.feedback')
for (let i = 0; i < menuCall.length; i++) {
  menuCall[i].addEventListener('click', function () {
    requestCall.classList.add('request-call--visible')
  })
}

let burgerClose = document.querySelectorAll('.burger-close')
for (let i = 0; i < burgerClose.length; i++) {
  burgerClose[i].addEventListener('click', function () {
    requestCall.classList.remove('request-call--visible')
    feedback.classList.remove('feedback--visible')
  })
}

let fogOfWar = document.querySelectorAll('.fogOfWar')
for (let i = 0; i < fogOfWar.length; i++) {
  fogOfWar[i].addEventListener('click', function () {
    feedback.classList.remove('feedback--visible')
    bodySidebarClose.classList.add('body__sidebar--close')
    requestCall.classList.remove('request-call--visible')
  })
}
//модалка обратная связь

let menuChat = document.querySelectorAll('.button-menu__chat')

for (let i = 0; i < menuChat.length; i++) {
  menuChat[i].addEventListener('click', function () {
    feedback.classList.add('feedback--visible')
  })
}
