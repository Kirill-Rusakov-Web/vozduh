const swiper2 = new Swiper(".coaches__slider", {
    direction: "horizontal",
    loop: !0,
    pagination: { el: ".swiper-pagination" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: "1",
    centeredSlides: !0,
  }),
  containerEl = document.querySelector(".price__slider-cards"),
  mixer = mixitup(containerEl),
  buttonFormat = document.querySelectorAll(".format__card-info"),
  hiddenFormatBlock = document.querySelector(".format__card-hidden"),
  buttonFormatClose = document.querySelectorAll(".format__card-hidden-cross");
buttonFormat.forEach(function (e) {
  e.addEventListener("click", function () {
    this.nextElementSibling.classList.add("format__card-hidden--active");
  });
}),
  buttonFormatClose.forEach(function (e) {
    e.addEventListener("click", function () {
      this.parentElement.classList.remove("format__card-hidden--active");
    });
  });
const buttonHiddenMenu = document.querySelector(".hidden-menu__btn"),
  hiddenMenu = document.querySelector(".hidden-menu"),
  hiddenMenuLink = document.querySelectorAll(".hidden-menu .nav li a");
buttonHiddenMenu.addEventListener("click", function () {
  this.classList.toggle("hidden-menu__btn--active"),
    hiddenMenu.classList.toggle("hidden-menu--active");
}),
  hiddenMenuLink.forEach(function (e) {
    e.addEventListener("click", function () {
      hiddenMenu.classList.remove("hidden-menu--active"),
        buttonHiddenMenu.classList.remove("hidden-menu__btn--active");
    });
  });
const formHidden = document.querySelector(".hidden-form"),
  buttonFormHidden = document.querySelectorAll(".price__slider-card .button"),
  formHiddenCross = document.querySelector(".hidden-form__cross"),
  formatCardButton = document.querySelectorAll(".format__card-button"),
  clubButton = document.querySelector(".club__card-button"),
  clubButton2 = document.querySelector(".lng-215");
(formHiddenClub = document.querySelector(".hidden-form-club")),
  (formHiddenClubCross = document.querySelector(".hidden-form-club__cross")),
  (specialButton = document.querySelector(".special-button")),
  (specialButton2 = document.querySelector(".faq-btn-click")),
  (formHiddenSpecial = document.querySelector(".hidden-form-special")),
  (formHiddenSpecialCross = document.querySelector(
    ".hidden-form-special__cross"
  )),
  buttonFormHidden.forEach(function (e) {
    e.addEventListener("click", function () {
      formHidden.classList.add("hidden-form--active");
    });
  }),
  formHiddenCross.addEventListener("click", function () {
    formHidden.classList.remove("hidden-form--active");
  }),
  formatCardButton.forEach(function (e) {
    e.addEventListener("click", function () {
      formHidden.classList.add("hidden-form--active");
    });
  }),
  // clubButton.addEventListener("click", function () {
  //   formHiddenClub.classList.add("hidden-form-club--active");
  // }),
  // clubButton2.addEventListener("click", function () {
  //   formHiddenClub.classList.add("hidden-form-club--active");
  // }),
  formHiddenClubCross.addEventListener("click", function () {
    formHiddenClub.classList.remove("hidden-form-club--active");
  }),
  specialButton.addEventListener("click", function () {
    formHiddenSpecial.classList.add("hidden-form-special--active");
  }),
  specialButton2.addEventListener("click", function () {
    formHiddenSpecial.classList.add("hidden-form-special--active");
  }),
  formHiddenSpecialCross.addEventListener("click", function () {
    formHiddenSpecial.classList.remove("hidden-form-special--active");
  });
const videoBlock = document.querySelector(".goal__video-block"),
  popupBlock = document.querySelector(".goal__popup"),
  popupVideo = document.querySelector(".goal__popup video"),
  popupVideoclose = document.querySelector(".goal__popup span");
videoBlock.addEventListener("click", function (e) {
  (popupBlock.style.display = "block") /*(popupVideo.srs = e.getAttribute("src"))*/;
}),
  popupVideoclose.addEventListener("click", function () {
    popupBlock.style.display = "none";
  });
const videoBlock2 = document.querySelectorAll(".reviews__card video"),
  popupBlock2 = document.querySelector(".reviews__popup"),
  popupVideo2 = document.querySelector(".reviews__popup video"),
  popupVideoclose2 = document.querySelector(".reviews__popup span");
videoBlock2.forEach(function (e) {
  e.addEventListener("click", function () {
    (popupBlock2.style.display = "block"),
      (popupVideo2.src = e.getAttribute("src"));
  });
}),
  popupVideoclose2.addEventListener("click", function () {
    popupBlock2.style.display = "none";
  });
const videoPlay3 = document.querySelectorAll(
    ".timetable__block-item-video img"
  ),
  popupBlock3 = document.querySelector(".reviews__popup"),
  popupVideo3 = document.querySelector(".reviews__popup video"),
  popupVideoclose3 = document.querySelector(".reviews__popup span");
videoPlay3.forEach(function (e) {
  e.addEventListener("click", function () {
    (popupBlock3.style.display = "block"),
      (popupVideo3.src = e.nextElementSibling.getAttribute("src"));
  });
}),
  popupVideoclose3.addEventListener("click", function () {
    popupBlock3.style.display = "none";
  });
const select = document.querySelector(".change-lng"),
  allLng = ["ru", "en", "lt"];
function changeLanguage() {
  let e = window.location.hash;
  for (var o in ((e = e.substr(1)),
  allLng.includes(e) ||
    ((location.href = window.location.pathname + "#ru"), location.reload()),
  (select.value = e),
  langArr))
    document.querySelector(".lng-" + o).innerHTML = langArr[o][e];
}
select.addEventListener("change", function () {
  var e = select.value;
  (location.href = window.location.pathname + "#" + e), location.reload();
}),
  changeLanguage();


const footerButton = document.querySelector('.footer__btn');
const footerHiddenBlock =document.querySelector('.footer__hidden-block');
const footerHiddenBlockCross = document.querySelector('.footer__hidden-block-cross');

footerButton.addEventListener('click', function(){
    footerHiddenBlock.classList.add('footer__hidden-block--active');
})

footerHiddenBlockCross.addEventListener('click', function(){
    footerHiddenBlock.classList.remove('footer__hidden-block--active');
})

