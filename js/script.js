var link = document.querySelector(".login-link");
var modalLogin = document.querySelector(".modal.login");
var modalCloseButton = modalLogin.querySelector(".modal-close");
var loginForm = modalLogin.querySelector(".login-form");
var loginInputLogin = modalLogin.querySelector(".login-login");
var loginInputPassword = modalLogin.querySelector(".login-password");

var mapLink = document.querySelector(".contacts-map-link");
var modalMap = document.querySelector(".modal.map");
var modalMapCloseButton = modalMap.querySelector(".modal-close");

link.addEventListener("click", function (event) {
  event.preventDefault();

  modalLogin.classList.add("modal-active");
  loginInputLogin.focus();
});

modalCloseButton.addEventListener("click", function (event) {
  event.preventDefault();

  modalLogin.classList.remove("modal-active");
  modalLogin.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!loginInputLogin.value || !loginInputPassword.value) {
    modalLogin.classList.remove("modal-error");
    modalLogin.offsetWidth = modalLogin.offsetWidth;
    modalLogin.classList.add("modal-error");
  }
});

mapLink.addEventListener("click", function (event) {
  event.preventDefault();

  modalMap.classList.add("modal-active");
});

modalMapCloseButton.addEventListener("click", function (event) {
  event.preventDefault();

  modalMap.classList.remove("modal-active");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modalLogin.classList.contains("modal-active")) {
      modalLogin.classList.remove("modal-active");
      modalLogin.classList.remove("modal-error");
    }

    if (modalMap.classList.contains("modal-active")) {
      modalMap.classList.remove("modal-active");
    }
  }
});
