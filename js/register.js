import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
window.customElements.define("site-header", Header);
window.customElements.define("site-footer", Footer);

let $ = document;
let userNameInput = $.querySelector("#userName");
let phoneInput = $.querySelector("#tel");
let emailInput = $.querySelector("#email");
let passwordInput = $.querySelector("#pas");
let repeatPasswordInput = $.querySelector("#repas");
let registerBtn = $.getElementById("btn");
const siteHeader = $.querySelector("site-header");
let newUserName = siteHeader.shadowRoot.querySelectorAll("#name_user");


registerBtn.addEventListener("click", () => {
  if (
    userNameInput.value &&
    phoneInput.value &&
    emailInput.value &&
    passwordInput.value
  ) {
    if (userNameInput.value.length >= 3 && passwordInput.value.length >= 4) {
      newUserName.forEach((newName) => {
        let user = newName.innerHTML = userNameInput.value;
        localStorage.setItem('username', user);
      });

        if(repeatPasswordInput.value===passwordInput.value){
          iziToast.success({
            title: "تبریک!",
            message: "ثبت نام با موفقیت انجام شد",
            timeout: 2000,
            rtl: true,
            position: "topCenter",
            close: false,
            messageColor: "#00FF00", // متن سبز
            backgroundColor: "#333", // پس‌زمینه طوسی تیره
            progressBarColor: "#FFFFFF", // خط زیر پیام سفید
            transitionIn: "bounceInLeft",
            theme: "dark",
          });
  
          setTimeout(() => {
            window.location.href = "index.html";
          }, 1700);
        }else{
          iziToast.error({
            title: "توجه",
            message:
              "رمزهای عبور یکسان نیستند",
            position: "topCenter",
            transitionInMobile: "fadeInRight",
            rtl: true,
            progressBarColor: "#b90f0f",
            close: false,
            timeout: 2000,
          });

        }

    } else {
      iziToast.error({
        title: "توجه",
        message:
          "پسورد باید بیشتر از ۴ و نام کاربری باید بیشتر از ۳ کاراکتر باشد.",
        position: "topCenter",
        transitionInMobile: "fadeInRight",
        rtl: true,
        progressBarColor: "#b90f0f",
        close: false,
        timeout: 3100,
      });
    }
  } else {
    iziToast.error({
      title: "خطا",
      message: "لطفا همه‌ی فیلدها را تکمیل کنید.",
      position: "topCenter",
      transitionInMobile: "fadeInRight",
      rtl: true,
      progressBarColor: "#b90f0f",
      close: false,
      timeout: 2100,
    });
  }

  console.log(userNameInput.value);
});
