import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";
import { Products } from "../components/products.js";
import { ProductOffcanvas } from "../components/productoffcanvas.js";
import * as utils from "../js/utils/productUtils.js";

window.customElements.define("site-header", Header);
window.customElements.define("site-footer", Footer);
window.customElements.define("site-product", Products);
window.customElements.define("product-offcanvas", ProductOffcanvas);

let $ = document;
let mainImg = $.querySelector(".mainImg");
let img1 = $.querySelector(".img1");
let img2 = $.querySelector(".img2");
let img3 = $.querySelector(".img3");
let nameProduct = $.querySelector(".nameproduct");
let price = $.querySelector(".price");
let images = $.querySelectorAll(".col img");
let positiveIcon = $.querySelector(".positive");
let negativeIcon = $.querySelector(".negative");
let numberProduct = $.querySelector(".numberproduct");
let imgContent = $.querySelector(".img__content");
let commentsBox = $.querySelector(".comments");
let textareaBox = $.querySelector("textarea");
let btnRegistration = $.querySelector("#btnRegistration");
let addToBasketBtn = $.querySelector("#addToBasket");
let arrayPriceProduct = [];



window.addEventListener("DOMContentLoaded", () => {

  let data = JSON.parse(localStorage.getItem("product"));
  mainImg.src = data.img1;
  img1.src = data.img2;
  img2.src = data.img3;
  img3.src = data.img1;
  nameProduct.innerHTML = data.nameProduct;
  price.innerHTML = data.price;


  const productBody = utils.getProductBody();
  const priceSum = utils.getPriceSum();
  const siteHeader = utils.getSiteHeader();
  const badgeBasket = utils.getBadgeBasket();
  const productTag = utils.getProductTags();
  


  //select img

  images.forEach((img) => {
    img.addEventListener("click", () => {
      mainImg.src = img.src;
    });
  });
  // end
  positiveIcon.addEventListener("click", () => {
    numberProduct.textContent++;
    updateOffcanvasCountFromMain();
  });

  negativeIcon.addEventListener("click", () => {
    let count = +numberProduct.textContent;
    if (count > 1) {
      numberProduct.textContent = count - 1;
      updateOffcanvasCountFromMain();
    }
  });

  // zoom img

  imgContent.addEventListener("mousemove", (event) => {
    const xPossition = event.clientX - event.target.offsetLeft;
    const yPossition = event.clientY - event.target.offsetTop;

    mainImg.style.cssText += `transform-origin : ${xPossition}px ${yPossition}px; transform: scale(2);`;
  });
  imgContent.addEventListener("mouseleave", () => {
    mainImg.style.cssText += `transform: scale(1);`;
  });

  //end

  // comments

  btnRegistration.addEventListener("click", () => {
    fetch("https://api.keybit.ir/time/")
      .then((res) => res.json())
      .then((data) => {
        commentsBox.insertAdjacentHTML(
          "beforeend",
          `
    
      <div class="w-100 border border-2 p-3 rounded my-3">
      <div class="d-flex justify-content-between">
      <span class="username d-inline-block">${localStorage.getItem(
        "username"
      )}</span>
            <span class="text-secondary">${data.date.day.number.fa}
              ${data.date.month.name}
              ${data.date.year.number.fa}
            </span>
              </div>
              <div>
              ${textareaBox.value}
              </div>
              <div class="d-flex justify-content-end align-items-center">
            <i class="fa-regular fa-thumbs-up m-1 like__icon"></i><span>1</span>
            <i class="fa-regular fa-thumbs-down m-1 dislike__icon"></i><span>1</span>
          </div>
        </div>
    `
        );
        textareaBox.value = "";
      });
  });

  // like - dislike comment
  let likeIcon = commentsBox.querySelectorAll(".like__icon");
  let dislikeIcon = commentsBox.querySelectorAll(".dislike__icon");

  commentsBox.addEventListener("click", (event) => {
    if (event.target.classList.contains("like__icon")) {
      const like = event.target;
      const dislikeIcon = like.parentElement.querySelector(".dislike__icon");
      const likeCount = like.nextElementSibling;
      const dislikeCount = dislikeIcon.nextElementSibling;

      if (like.classList.contains("active")) {
        like.classList.remove("active");
        likeCount.innerHTML--;
        // dislikeCount++
      } else {
        like.classList.add("active");
        likeCount.innerHTML++;

        if (dislikeIcon.classList.contains("active")) {
          dislikeIcon.classList.remove("active");
          dislikeCount.innerHTML--;
        }
      }
    }

    if (event.target.classList.contains("dislike__icon")) {
      const dislike = event.target;
      const likeIcon = dislike.parentElement.querySelector(".like__icon");
      const dislikeCount = dislike.nextElementSibling;
      const likeCount = likeIcon.nextElementSibling;

      if (dislike.classList.contains("active")) {
        dislike.classList.remove("active");
        dislikeCount.innerHTML--;
      } else {
        dislike.classList.add("active");
        dislikeCount.innerHTML++;

        if (likeIcon.classList.contains("active")) {
          likeIcon.classList.remove("active");
          likeCount.innerHTML--;
        }
      }
    }
  });

  // click to same product
  productTag.forEach((product) => {
    let imgContentProduct = product.shadowRoot.querySelector(".carousel-inner");
    imgContentProduct.addEventListener("click", () => {
      const img1 = product.getAttribute("img-slider1");
      const img2 = product.getAttribute("img-slider2");
      const img3 = product.getAttribute("img-slider3");
      const nameProduct = product
        .querySelector('p[slot="name-product"]')
        .textContent.trim();
      const price = product.querySelector("#price").textContent.trim();

      let productData = {
        img1,
        img2,
        img3,
        nameProduct,
        price,
      };
      localStorage.setItem("product", JSON.stringify(productData));
      console.log(productData);
      window.location.href = "selectProduct.html";
    });
  });




  addToBasketBtn.addEventListener("click", () => {
    const count = parseInt(numberProduct.textContent);
    utils.addProductToBasket(productBody, priceSum, mainImg.src, nameProduct.innerHTML, price.innerHTML, count);
    utils.getBsOffcanvas().show();
    
    
    let priceProductText = price.textContent.trim();
    let priceProductNumber = +priceProductText.replace(/,/g, "");
    let countProduct = parseInt(numberProduct.textContent);
    for (let i = 0; i < countProduct; i++) {
      utils.calculateSumPrice()
    }
console.log(arrayPriceProduct);

    // let total = arrayPriceProduct.reduce((total, num) => total + num, 0);
    // priceSum.textContent = total.toLocaleString("en-US");

    let showToast = false;
    if (badgeBasket.length > 0) {
      badgeBasket.forEach((badge) => {
        let badgeValueBefore = Number(badge.textContent.trim()) || 0;
        let badgeValueAfter = badgeValueBefore + 1;
        badge.textContent = badgeValueAfter;

        if (badgeValueAfter > badgeValueBefore) {
          showToast = true;
        }
      });
      if (showToast) {
        iziToast.success({
          message: "کالا به سبد خرید شما اضافه شد",
          timeout: 2100,
          rtl: true,
          position: "topCenter",
          close: false,
          messageColor: "#00FF00", // متن سبز
          backgroundColor: "#333", // پس‌زمینه طوسی تیره
          progressBarColor: "#FFFFFF", // خط زیر پیام سفید
          transitionIn: "bounceInLeft",
          theme: "dark",
        });
      }
    }
  });

  //همگام سازی عدد btn group که + - داره با عدد آن در offcanvas

  function updateOffcanvasCountFromMain() {
    let currentProductName = nameProduct.textContent.trim();
    let currentCount = parseInt(numberProduct.textContent);

    let selectedProducts = productBody.querySelectorAll(".product__selected");

    selectedProducts.forEach((product) => {
      let nameElem = product.querySelector("#nameProduct");
      let numberElem = product.querySelector(".numberproduct");

      if (
        nameElem &&
        numberElem &&
        nameElem.textContent.trim() === currentProductName
      ) {
        numberElem.textContent = currentCount;
      }
    });
  }

    // رویدادهای سبد خرید (حذف، کم/زیاد کردن)
    utils.handleProductBody(productBody, priceSum, badgeBasket);

    // افزودن از کارت محصول (site-product)
    utils.handleProductTag(
      productTag,
      siteHeader,
      productBody,
      priceSum,
      badgeBasket
    );
  
    utils.calculateSumPrice();
  

    utils.handleViewCartButton();
    
  });

